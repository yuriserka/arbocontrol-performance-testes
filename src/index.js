const utilsBefore = require('./utils/before');
const utilsAfter = require('./utils/after');
const tiposDeAtividadeFuncs = require('./tipos_de_atividade');

module.exports = {
    ...utilsBefore,
    ...utilsAfter,
    ...tiposDeAtividadeFuncs,
};
