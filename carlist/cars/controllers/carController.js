var Car = require('../models/car');
var Maker = require('../models/maker');
var Model = require('../models/model');
var CarInstance = require('../models/carinstance');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        car_count: function(callback) {
            Car.count({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        car_instance_count: function(callback) {
            CarInstance.count({}, callback);
        },
        car_instance_available_count: function(callback) {
            CarInstance.count({status:'Available'}, callback);
        },
        maker_count: function(callback) {
            Maker.count({}, callback);
        },
        model_count: function(callback) {
            Model.count({}, callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Car List Home', error: err, data: results });
    });
};

// Display list of all Cars.
exports.car_list = function(req, res, next) {

  Car.find({}, 'title maker')
    .populate('maker')
    .exec(function (err, list_cars) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('car_list', { title: 'Car List', car_list: list_cars });
    });

};

// Display detail page for a specific car.
exports.car_detail = function(req, res, next) {

    async.parallel({
        car: function(callback) {

            Car.findById(req.params.id)
              .populate('maker')
              .populate('model')
              .exec(callback);
        },
        car_instance: function(callback) {

          CarInstance.find({ 'car': req.params.id })
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.car==null) { // No results.
            var err = new Error('Car not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('car_detail', { title: 'Title', car:  results.car, car_instances: results.car_instance } );
    });

};

// Display car create form on GET.
exports.car_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Car create GET');
};

// Handle car create on POST.
exports.car_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Car create POST');
};

// Display car delete form on GET.
exports.car_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Car delete GET');
};

// Handle car delete on POST.
exports.car_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Car delete POST');
};

// Display car update form on GET.
exports.car_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Car update GET');
};

// Handle car update on POST.
exports.car_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Car update POST');
};