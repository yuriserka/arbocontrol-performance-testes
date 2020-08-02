const relatorioJson = require('../../data/relatorio.json');

module.exports = {
  createRelatorioJsonBody: (req, ctx, ee, next) => {
    req.json = {
      ...relatorioJson,
      formulario: ctx.vars.inspecao_geral_form_obj,
      titulo: `Relatorio_${Math.floor(Math.random() * 100)} Teste`,
    };
    return next();
  },
};
