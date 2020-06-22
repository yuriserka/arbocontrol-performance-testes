module.exports = {
    setFormAsPrincipal: (req, ctx, ee, next) => {
        [ctx.vars.form_pe_body,] = ctx.vars.form_pe_body;
        req.json = {
            ...ctx.vars.form_pe_body,
            principal: true,
        };
        return next();
    }
};
