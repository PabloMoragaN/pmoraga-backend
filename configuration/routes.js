
var createDefaultRoutes = function (app) {

    // select
    app.get('/', controller.getById);

    // insert
    app.post('/', controller.add);

    // update
    app.put('/', controller.update);

    // delete 
    app.delete('/', controller.remove);
}




module.exports = (app) => {

    createDefaultRoutes(app);
}