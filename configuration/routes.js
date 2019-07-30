
var createMailRoutes = function (app) {

    let controller = require('../controllers/mailer_controller')(app);

    // select
    app.post('/send-email', controller.sendEmail);

    /*
    app.post('/', controller.add);
    app.put('/', controller.update);
    app.delete('/', controller.remove);*/
}




module.exports = (app) => {

    createMailRoutes(app);
}