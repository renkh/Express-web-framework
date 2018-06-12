var Model = require('../models/model');
var Car = require('../models/car');
var async = require('async');

// Display list of all Models.
exports.model_list = function(req, res, next) {

  Model.find()
    .sort([['class', 'ascending']])
    .exec(function (err, list_models) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('model_list', { title: 'Model List', model_list: list_models });
    });

};

// Display detail page for a specific Model.
exports.model_detail = function(req, res, next) {

    async.parallel({
        model: function(callback) {
            Model.findById(req.params.id)
              .exec(callback);
        },

        model_cars: function(callback) {
          Car.find({ 'model': req.params.id })
          .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.model==null) { // No results.
            var err = new Error('Model not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('model_detail', { title: 'Model Detail', model: results.model, model_cars: results.model_cars } );
    });

};

// Display Model create form on GET.
exports.model_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Model create GET');
};

// Handle Model create on POST.
exports.model_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Model create POST');
};

// Display Model delete form on GET.
exports.model_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Model delete GET');
};

// Handle Model delete on POST.
exports.model_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Model delete POST');
};

// Display Model update form on GET.
exports.model_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Model update GET');
};

// Handle Model update on POST.
exports.model_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Model update POST');
};