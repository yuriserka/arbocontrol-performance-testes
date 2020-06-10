const axios = require('axios').default;

axios.create({
    proxy: {
        host: 'localhost',
        port: 9995,
        protocol: 'http',
    }
});

module.exports = axios;
