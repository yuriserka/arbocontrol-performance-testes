const territorioJson = require('../../data/territorio.json');

module.exports = {
  createTerritorioJsonBody: (req, ctx, ee, next) => {
    req.json = {
      ...territorioJson,
      nome: `Territorio_${Math.floor(Math.random() * 100)} Teste`,
    };
    return next();
  },
};
