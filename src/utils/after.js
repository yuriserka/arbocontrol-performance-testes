const axios = require('../api');

function getMetricResponseInterestedValue(r) {
    return r.data.measurements[0].value;
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
        const baseUrl = '/actuator/metrics';
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
                ee.emit('histogram', 'process.cpu.usage', getMetricResponseInterestedValue(r1));
                ee.emit('histogram', 'system.cpu.usage', getMetricResponseInterestedValue(r2));
                ee.emit('histogram', 'jvm.heap.usage', getMetricResponseInterestedValue(r3));
                return next();
            })).catch(err => {
                ee.emit('error', Error(`Axios Error: ${err.message}`));
                return next();
            });
    },
}
