var mongoose = require('mongoose');
var ShippingRequest = mongoose.model('ShippingRequest');
var config = require('../../../config/config');

exports.findAll = function (req, res) {

  var options = {
    criteria: { isActive: true }
  }

  ShippingRequest.list(options, function (err, data) {
    if (err) {
      return res.send(500);
    }

    return res.json(data);
  });
};

exports.create = function (req, res) {
  //var model = _.pick(req.body, '')

  var shipReq = new ShippingRequest(req.body);
  shipReq.user = req.user;
  shipReq.save(function (err, item) {
    if (err) {
      return res.send(500, err);
    }

    return res.json(item);
  });
};

exports.findById = function (req, res) {
  var id = req.param('listingId');
  var options = {
    criteria: { _id: id }
  }

  ShippingRequest.single(options, function (err, item) {
    if (err) {
      return res.send(500, err);
    }
    
    if (!item) {
      return res.send(404);
    }
    return res.json(item);
  });
};