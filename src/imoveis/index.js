module.exports = {
    createImovelJsonBody: (req, ctx, ee, next) => {
        req.json = {
            territorio: ctx.vars.territorio_criado_obj,
            cep: "",
            codigo: "",
            complemento: "",
            coordenadas: null,
            googlePlusCode: "",
            ladoQuarteirao: "",
            latitude: "",
            logradouro: "IMOVEL TESTE",
            longitude: "",
            numero: "",
            pontoEstrategico: false,
            pontoReferencia: "",
            sequencia: "",
            tipoPontoEstrategico: null,
            versao: "",
            tipoImovel: {
                ativo: true,
                createDateTime: null,
                descricao: null,
                id: 9,
                nome: "CONJUNTO HABITACIONAL",
                updateDateTime: null,
            },
        };
        return next();
    },
};
