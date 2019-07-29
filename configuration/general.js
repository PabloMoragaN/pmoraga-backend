const path = require('path');

module.exports = {
    port : 8888,
    logDir : path.join(__dirname, '..', '..', 'logs'),
    logFilename: 'server.log'
}