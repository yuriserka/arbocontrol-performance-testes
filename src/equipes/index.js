module.exports = {
    createEquipeJsonBody: (req, ctx, ee, next) => {
        req.json = {
            ...ctx.vars.obj_unidade_atual,
            equipesVinculos: null,
            nome: "Equipe de teste",
        };
        return next();
    },
}