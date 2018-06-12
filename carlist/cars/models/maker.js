var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MakerSchema = new Schema(
  {
    company_name: {type: String, required: true, max: 100},
    owner_name: {type: String, required: true, max: 100},
    founded: {type: Date},
  }
);

/*
// Virtual for author's full name
MakerSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});
*/

// Virtual for author's URL
MakerSchema
.virtual('url')
.get(function () {
  return '/catalog/maker/' + this._id;
});

//Export model
module.exports = mongoose.model('Maker', MakerSchema);