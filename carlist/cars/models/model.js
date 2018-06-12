var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    class: {type: String, required: true, min: 3, max: 100}
});

// Virtual for this genre instance URL.
ModelSchema
.virtual('url')
.get(function () {
  return '/catalog/model/'+this._id;
});

// Export model.
module.exports = mongoose.model('Model', ModelSchema);