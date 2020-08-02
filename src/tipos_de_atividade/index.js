module.exports = {
    setFormAsPrincipal: (req, ctx, ee, next) => {
        req.json = {
            ...ctx.vars.form_pe_body,
            principal: true,
        };
        return next();
    }
};
