var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema(
  {
    name: {type: String, required: true},
    maker: {type: Schema.ObjectId, ref: 'Maker', required: true},
    model: [{type: Schema.ObjectId, ref: 'Model'}],
    production: {type: Date},
  }
);

// Virtual for book's URL
CarSchema
.virtual('url')
.get(function () {
  return '/catalog/car/' + this._id;
});

//Export model
module.exports = mongoose.model('Car', CarSchema);