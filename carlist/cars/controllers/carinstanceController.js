var CarInstance = require('../models/carinstance');

// Display list of all CarInstances.
exports.carinstance_list = function(req, res, next) {

  CarInstance.find()
    .populate('car')
    .exec(function (err, list_carinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('carinstance_list', { title: 'Car Instance List', carinstance_list: list_carinstances });
    });

};

// Display detail page for a specific CarInstance.
exports.carinstance_detail = function(req, res, next) {

    CarInstance.findById(req.params.id)
    .populate('car')
    .exec(function (err, carinstance) {
      if (err) { return next(err); }
      if (carinstance==null) { // No results.
          var err = new Error('Car copy not found');
          err.status = 404;
          return next(err);
        }
      // Successful, so render.
      res.render('carinstance_detail', { title: 'Car:', carinstance:  carinstance});
    })

};

// Display CarInstance create form on GET.
exports.carinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: CarInstance create GET');
};

// Handle CarInstance create on POST.
exports.carinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: CarInstance create POST');
};

// Display CarInstance delete form on GET.
exports.carinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: CarInstance delete GET');
};

// Handle CarInstance delete on POST.
exports.carinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: CarInstance delete POST');
};

// Display CarInstance update form on GET.
exports.carinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: CarInstance update GET');
};

// Handle carinstance update on POST.
exports.carinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: CarInstance update POST');
};