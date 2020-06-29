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
}
