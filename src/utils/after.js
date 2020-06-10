module.exports = {
    showResponseStatus: (req, res, ctx, ee, next) => {
        console.log(`${req.method} ${res.request.href} - ${res.statusCode}`);
        return next();
    },
    showVariablesAfter: (req, res, ctx, ee, next) => {
        const variables = { ...ctx.vars, '$processEnvironment': undefined };
        console.log(variables);
        return next();
    },
    showResponseBody: (req, res, ctx, ee, next) => {
        console.log({
            response_body: res.body,
        });
        return next();
    }
}
