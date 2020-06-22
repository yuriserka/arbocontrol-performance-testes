const atividadeJson = require('../../data/atividade.json');

module.exports = {
  createAtividadeJsonBody: (req, ctx, ee, next) => {
    req.json = {
      ...atividadeJson,
      titulo: `Atividade_${Math.floor(Math.random() * 100)} Teste`,
    };
    return next();
  },
};
