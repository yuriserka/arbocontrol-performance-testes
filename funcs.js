/**
 * @param req is an object given to the Request library. Use this parameter to customize what is sent in the request (headers, body, cookies etc)
 * @param ctx is the virtual user's context, context.vars is a dictionary containing all defined variables
 * @param res is likewise the response object from the Request library. This object contains response headers, body etc.
 * @param ee is an event emitter that can be used to communicate with Artillery
 * @param next is the callback which must be called for the scenario to continue; it takes no arguments
 */

module.exports = {
    printStatusAfterRequest: (req, res, ctx, ee, next) => {
        console.log(`${res.req.method} ${res.request.href} - ${res.statusCode}`);
        return next();
    },
    printVariablesAndResponseBody: (req, res, ctx, ee, next) => {
        console.log({
            respBody: res.body,
            varsAfter: { ...ctx.vars, '$processEnvironment': undefined },
        });
        return next();
    },
    printRequestInfo: (req, ctx, ee, next) => {
        console.log({
            body: req.json,
            headers: req.headers,
        });
        return next();
    },
    setTipoAtividadeFormPrincipal: (req, ctx, ee, next) => {
        ctx.vars.form_pe_body = ctx.vars.form_pe_body['0'];
        req.json = {
            ...ctx.vars.form_pe_body,
            principal: true,
        };
        return next();
    }
}