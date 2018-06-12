var Maker = require('../models/maker');
var async = require('async');
var Car = require('../models/car');

// Display list of all Makers.
exports.maker_list = function(req, res, next) {

  Maker.find()
    .sort([['company_name', 'ascending']])
    .exec(function (err, list_makers) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('maker_list', { title: 'Maker List', maker_list: list_makers });
    });

};

// Display detail page for a specific Maker.
exports.maker_detail = function(req, res, next) {

    async.parallel({
        maker: function(callback) {
            Maker.findById(req.params.id)
              .exec(callback)
        },
        makers_cars: function(callback) {
          Car.find({ 'maker': req.params.id },'title summary')
          .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.maker==null) { // No results.
            var err = new Error('Maker not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('maker_detail', { title: 'Maker Detail', maker: results.maker, maker_cars: results.makers_cars } );
    });

};

// Display Maker create form on GET.
exports.maker_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Maker create GET');
};

// Handle Maker create on POST.
exports.maker_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Maker create POST');
};

// Display Maker delete form on GET.
exports.maker_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Maker delete GET');
};

// Handle Maker delete on POST.
exports.maker_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Maker delete POST');
};

// Display Maker update form on GET.
exports.maker_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Maker update GET');
};

// Handle Maker update on POST.
exports.maker_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Maker update POST');
};