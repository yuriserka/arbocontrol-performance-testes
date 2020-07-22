const axios = require('../api');

let reqCounter = 0;

function getMetricResponseInterestedValue(r) {
    return Number(r.data.measurements[0].value);
}

module.exports = {
    showResponseStatus: (req, res, ctx, ee, next) => {
        console.log(`${req.method} ${res.request.href} - ${res.statusCode}`);
        return next();
    },
    showVariablesAfter: (req, res, ctx, ee, next) => {
        console.log({
            ...ctx.vars,
            '$processEnvironment': undefined
        });
        return next();
    },
    showResponseBody: (req, res, ctx, ee, next) => {
        console.log({
            response_body: res.body,
        });
        return next();
    },
    logErrorIfAny: (req, res, ctx, ee, next) => {
        switch (res.statusCode) {
            case 200:
            case 201:
                break;
            default:
                console.log({ error: res.body });
                break;
        }
        return next();
    },
    getMetrics: (req, res, ctx, ee, next) => {
        if ((++reqCounter) % 15) {
            return next();
        }
        const baseUrl = 'http://localhost:9995/actuator/metrics';
        const headers = {
            Authorization: 'Basic Y2xpZW50OmNsaWVudA==',
        };
        const endpoints = [
            'process.cpu.usage',
            'system.cpu.usage',
            'jvm.memory.used?tag=area:heap',
        ];
        axios.all(endpoints.map(e => axios.get(`${baseUrl}/${e}`, { headers })))
            .then(axios.spread((...responses) => {
                const [r1, r2, r3] = responses;
                ee.emit('histogram', 'Process CPU', getMetricResponseInterestedValue(r1));
                ee.emit('histogram', 'System CPU', getMetricResponseInterestedValue(r2));
                ee.emit('histogram', 'JVM Heap', getMetricResponseInterestedValue(r3));
                return next();
            })).catch(err => {
                ee.emit('error', Error(`Axios Error: ${err.message}`));
                return next();
            });
    },
}
