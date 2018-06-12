var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var CarInstanceSchema = new Schema(
  {
    car: { type: Schema.ObjectId, ref: 'Car', required: true }, //reference to the associated car
    status: {type: String, required: true, enum: ['Available', 'Discontinued'], default: 'Available'},
  }
);

// Virtual for bookinstance's URL
CarInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/carinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('CarInstance', CarInstanceSchema);