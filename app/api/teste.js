var api = {};

api.helloWorld = function(req, res) {

  var message = {_id: 1, message: 'Hello World! :D'};

  res.json(message);

};

module.exports = api;
