const express = require('express');
var app = express();


async function start() {

    // Configuramos express pasándolo por el módulo de middlewares y esperamos mediante
    // await a que termine el proceso

  
    await require('./modules/middlewares')(app);

    

    // Lanzamos la aplicación y con ello el servicio de comprobación del esquema
    await require('./modules/boot')(app);

}




start();



