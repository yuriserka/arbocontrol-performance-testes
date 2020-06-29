const registroJson = require('../../data/registro_lista_de_trabalho.json');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createRegistroJsonBody: (req, ctx, ee, next) => {
        req.json = {
            ...registroJson,
            atividade: ctx.vars.atividade_criada_obj,
            formulario: ctx.vars.inspecao_geral_form_obj,
            imovel: ctx.vars.imovel_criado_obj,
            uuid: uuidv4(),
        };
        return next();
    },
};
