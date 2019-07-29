const express = require('express');
const config = require('../configuration/general');
const cors = require('cors');

// Este módulo exporta la configuración del servidor.
module.exports = async(app) => {
    // Configuramos express
    app.set('port', config.port);
    //Permitir CORS HEADERS
    app.use(cors());
    app.use(express.json());

    // Generamos las rutas de forma dinámica
    require('../configuration/routes')(app);
};