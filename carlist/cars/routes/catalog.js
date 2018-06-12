var express = require('express');
var router = express.Router();

// Require controller modules.
var car_controller = require('../controllers/carController');
var maker_controller = require('../controllers/makerController');
var model_controller = require('../controllers/modelController');
var car_instance_controller = require('../controllers/carinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', car_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/car/create', car_controller.car_create_get);

// POST request for creating Book.
router.post('/car/create', car_controller.car_create_post);

// GET request to delete Book.
router.get('/car/:id/delete', car_controller.car_delete_get);

// POST request to delete Book.
router.post('/car/:id/delete', car_controller.car_delete_post);

// GET request to update Book.
router.get('/car/:id/update', car_controller.car_update_get);

// POST request to update Book.
router.post('/car/:id/update', car_controller.car_update_post);

// GET request for one Book.
router.get('/car/:id', car_controller.car_detail);

// GET request for list of all Book items.
router.get('/cars', car_controller.car_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display maker).
router.get('/maker/create', maker_controller.maker_create_get);

// POST request for creating Author.
router.post('/maker/create', maker_controller.maker_create_post);

// GET request to delete Author.
router.get('/maker/:id/delete', maker_controller.maker_delete_get);

// POST request to delete Author.
router.post('/maker/:id/delete', maker_controller.maker_delete_post);

// GET request to update Author.
router.get('/maker/:id/update', maker_controller.maker_update_get);

// POST request to update Author.
router.post('/maker/:id/update', maker_controller.maker_update_post);

// GET request for one Author.
router.get('/maker/:id', maker_controller.maker_detail);

// GET request for list of all Authors.
router.get('/makers', maker_controller.maker_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/model/create', model_controller.model_create_get);

//POST request for creating Genre.
router.post('/model/create', model_controller.model_create_post);

// GET request to delete Genre.
router.get('/model/:id/delete', model_controller.model_delete_get);

// POST request to delete Genre.
router.post('/model/:id/delete', model_controller.model_delete_post);

// GET request to update Genre.
router.get('/model/:id/update', model_controller.model_update_get);

// POST request to update Genre.
router.post('/model/:id/update', model_controller.model_update_post);

// GET request for one Genre.
router.get('/model/:id', model_controller.model_detail);

// GET request for list of all Genre.
router.get('/models', model_controller.model_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/carinstance/create', car_instance_controller.carinstance_create_get);

// POST request for creating BookInstance.
router.post('/carinstance/create', car_instance_controller.carinstance_create_post);

// GET request to delete BookInstance.
router.get('/carinstance/:id/delete', car_instance_controller.carinstance_delete_get);

// POST request to delete BookInstance.
router.post('/carinstance/:id/delete', car_instance_controller.carinstance_delete_post);

// GET request to update BookInstance.
router.get('/carinstance/:id/update', car_instance_controller.carinstance_update_get);

// POST request to update BookInstance.
router.post('/carinstance/:id/update', car_instance_controller.carinstance_update_post);

// GET request for one BookInstance.
router.get('/carinstance/:id', car_instance_controller.carinstance_detail);

// GET request for list of all BookInstance.
router.get('/carinstances', car_instance_controller.carinstance_list);

module.exports = router;