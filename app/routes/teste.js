module.exports = function (app) {
  var api = app.api.teste;
  app.route('/register').post(api.register);
  app.route('/initializeBrands').post(api.initializeBrands);
  app.route('/socialLogin').post(api.socialLogin);
  app.route('/login').post(api.login);
  app.route('/activate').post(api.activate);
  app.route('/user/createSession').post(api.createSession);
  app.route('/user/initPreference').post(api.initPreference);
  app.route('/user/trackAction').post(api.trackAction);
  app.route('/item/retrievePersonalizedItem').post(api.retrievePersonalizedItem);
  app.route('/user/closeSession').post(api.closeSession);
  app.route('/products').get(api.products);
  app.route('/currency').get(api.currency);
  app.route('/product').get(api.product);
  app.route('/reviews').get(api.reviews);
  app.route('/getUpdate').get(api.getUpdate);
  app.route('/search').get(api.search);
};
