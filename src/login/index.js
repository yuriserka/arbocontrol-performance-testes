const axios = require('../api');

module.exports = {
    // just for test
    setLoginJsonBody: (req, ctx, ee, next) => {
        axios.get("/api/auth/pesquisar-unidades-por-cpf", {
            params: {
                cpf: ctx.vars.cpf
            }
        }).then(response => {
            console.log({ response });
            ctx.vars.unidade_id = response.data.id;
            req.json = {
                cpf: ctx.vars.cpf,
                password: ctx.vars.senha,
                unidadeId: ctx.vars.unidade_id,
            };
            return next();
        }).catch(err => {
            console.log({ err });
            return next();
        });
    },
}