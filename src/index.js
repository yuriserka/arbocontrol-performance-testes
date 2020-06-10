const utilsBefore = require('./utils/before');
const utilsAfter = require('./utils/after');
const tiposDeAtividadeFuncs = require('./tipos_de_atividade');
const equipesFuncs = require('./equipes');
const loginFuncs = require('./login');
const imoveisFuncs = require('./imoveis');

module.exports = {
    ...utilsBefore,
    ...utilsAfter,
    ...loginFuncs,
    ...tiposDeAtividadeFuncs,
    ...equipesFuncs,
    ...imoveisFuncs,
};
