'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Shipping Request Schema
 * @type {Schema}
 */
var OfferSchema = new Schema({
  otherInfo: String,
  dateCreated: { type: Date, default: Date.now },
  dateTravelling: { type: Date },
  countryFrom: String,
  stateFrom: String,
  cityFrom: String,
  countryTo: String,
  stateTo: String,
  cityTo: String,
  isFreeHelp: { type: Boolean, default: false },
  expectInReturn: { type: String, default: '' },
  user: { type: Schema.ObjectId, ref: 'User' },
  isActive: { type: Boolean, default: true }
});


OfferSchema.static('list', function (options, cb) {
  var criteria = options.criteria || {};
  var sort = options.sort || { 'dateCreated': -1 };
  var limit = options.limit === 0 ? 0 : (options.limit || 25);
  var page = options.page || 0;
  var select = options.select || '';
  var populate = options.populate || [];

  this.find(criteria)
    .select(select)
    .sort(sort)
    .populate(populate)
    .limit(limit)
    .skip(limit * page)
    .exec(cb);  
});

OfferSchema.static('single', function (options, cb) {
  var criteria = options.criteria || {};
  var select = options.select || '';
  var populate = options.populate || [];

  this.findOne(criteria)
    .select(select)
    .populate(populate)
    .exec(cb);
});

mongoose.model('ShippingOffer', OfferSchema);