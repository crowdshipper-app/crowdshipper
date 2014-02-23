'use strict';

var api = require('../api/1');
var authorization = require('./middlewares/authorization');

module.exports = function (app) {
  app.get('/api/1/shippingRequests', authorization.requiresLogin, api.shippingRequests.findAll);
  app.post('/api/1/shippingRequests', authorization.requiresLogin, api.shippingRequests.create);
  app.get('/api/1/shippingRequests/:listingId', authorization.requiresLogin, api.shippingRequests.findById);

  app.get('/api/1/shippingOffers', authorization.requiresLogin, api.shippingOffers.findAll);
  app.post('/api/1/shippingOffers', authorization.requiresLogin, api.shippingOffers.create);
  app.get('/api/1/shippingOffers/:listingId', authorization.requiresLogin, api.shippingOffers.findById);

};