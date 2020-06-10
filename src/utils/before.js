module.exports = {
    showVariablesBefore: (req, ctx, ee, next) => {
        console.log({
            ...ctx.vars,
            '$processEnvironment': undefined
        });
        return next();
    },
    showRequestInfo: (req, ctx, ee, next) => {
        console.log({
            method: req.method,
            query_params: req.qs,
            body: req.json,
            headers: req.headers,
        });
        return next();
    },
    castIdToNumber: (req, ctx, ee, next) => {
        req.json.id = parseInt(req.json.id);
        console.log('id req.body', req.json);
        return next();
    },
}
