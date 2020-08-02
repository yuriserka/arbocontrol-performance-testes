const imovelJson = require('../../data/imovel.json');

module.exports = {
    createImovelJsonBody: (req, ctx, ee, next) => {
        req.json = {
            ...imovelJson,
            territorio: ctx.vars.territorio_criado_obj,
            logradouro: `imovel_${Math.floor(Math.random() * 100)} teste`,
        };
        return next();
    },
};
