const utilsBefore = require('./utils/before');
const utilsAfter = require('./utils/after');

const tiposDeAtividadeFuncs = require('./tipos_de_atividade');
const equipesFuncs = require('./equipes');
const loginFuncs = require('./login');
const imoveisFuncs = require('./imoveis');
const territoriosFuncs = require('./territorios');
const atividadesFuncs = require('./atividades');
const listaDeTrabalhoFuncs = require('./lista_de_trabalho');
const relatoriosFuncs = require('./relatorios');

module.exports = {
    ...utilsBefore,
    ...utilsAfter,
    ...loginFuncs,
    ...tiposDeAtividadeFuncs,
    ...equipesFuncs,
    ...imoveisFuncs,
    ...territoriosFuncs,
    ...atividadesFuncs,
    ...listaDeTrabalhoFuncs,
    ...relatoriosFuncs,
};
