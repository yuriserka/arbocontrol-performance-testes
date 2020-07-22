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
    pushRegistroId: (req, res, ctx, ee, next) => {
        if (res.statusCode === 200) {
            const arr = ctx.vars.registros_ids[ctx.vars['$uuid']] || [];
            ctx.vars.registros_ids[ctx.vars['$uuid']] = [...arr, ctx.vars.registro_criado_id];
        }
        return next();
    },
    deleteRegistroId: (req, res, ctx, ee, next) => {
        if (res.statusCode === 200) {
            const arr = ctx.vars.registros_ids[ctx.vars['$uuid']];
            const tid = arr[ctx.vars['$loopElement']];
            ctx.vars.registros_ids[ctx.vars['$uuid']] = arr.filter(id => id !== tid);
        }
        return next();
    },
    okToDelete: (ctx, next) => {
        const arr = ctx.vars.registros_ids[ctx.vars['$uuid']];
        return next(arr.length);
    },
    setDeleteRegistrosAtividadesURL: (req, ctx, ee, next) => {
        const id = ctx.vars.registros_ids[ctx.vars['$uuid']][ctx.vars['$loopElement']];
        req.url = `${ctx.vars.target}/api/v1/registros-atividades/${id}`;
        return next();
    },
};
