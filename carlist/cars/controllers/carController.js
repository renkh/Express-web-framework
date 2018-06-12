var Car = require('../models/car');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all cars.
exports.car_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Car list');
};

// Display detail page for a specific car.
exports.car_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
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