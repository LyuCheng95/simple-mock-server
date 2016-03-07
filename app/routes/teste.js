module.exports = function (app) {
  var api = app.api.teste;

  app.route('/v1/teste')
            .get(api.helloWorld);
};
