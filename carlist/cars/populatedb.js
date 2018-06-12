#! /usr/bin/env node

console.log('This script populates some test fields to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Car = require('./models/car')
var Maker = require('./models/maker')
var Model = require('./models/model')
var CarInstance = require('./models/carinstance')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var makers = []
var models = []
var cars = []
var carinstances = []

function makerCreate(company_name, owner_name, d_founded, d_death, cb) {
  makerdetail = {company_name:company_name }
  if (d_founded != false) makerdetail.founded = d_founded

  var maker = new Maker(makerdetail);

  maker.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Maker: ' + maker);
    makers.push(maker)
    cb(null, maker)
  }  );
}

function modelCreate(name, cb) {
  var model = new Model({ class: name });

  model.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Model: ' + model);
    models.push(model)
    cb(null, model);
  }   );
}

function carCreate(name, maker, model, production, cb) {
  cardetail = {
    name: name,
    maker: maker,
    model: model,
    production: production
  }
  if (model != false) cardetail.model = model

  var car = new Car(cardetail);
  car.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Car: ' + car);
    cars.push(car)
    cb(null, car)
  }  );
}


function carInstanceCreate(car, status, cb) {
  carinstancedetail = {
    car: car
  }
  if (status != false) carinstancedetail.status = status

  var carinstance = new CarInstance(carinstancedetail);
  carinstance.save(function (err) {
    if (err) {
      console.log('ERROR CREATING CarInstance: ' + carinstance);
      cb(err, null)
      return
    }
    console.log('New CarInstance: ' + carinstance);
    carinstances.push(carinstance)
    cb(null, car)
  }  );
}


function createModelMakers(cb) {
    async.parallel([
        function(callback) {
          makerCreate('Ford', 'Ford Family', '1903-06-16', callback);
        },
        function(callback) {
          makerCreate('Honda', 'Japan Trustee Services Bank', '1948-09-24', callback);
        },
        function(callback) {
          makerCreate('Toyota', 'Japan Trustee Services Bank', '1937-08-28', callback);
        },
        function(callback) {
          makerCreate('Mercedes-Benz', 'Daimler AG', '1926-06-28', callback);
        },
        function(callback) {
          makerCreate('Ferrari N.V.', 'Exor N.V.', '1939-09-13', callback);
        },
        function(callback) {
          modelCreate("Mid-size Car", callback);
        },
        function(callback) {
          modelCreate("Mid-size SUV", callback);
        },
        function(callback) {
          modelCreate("Sports car", callback);
        }
        ],
        // optional callback
        cb);
}


function createCars(cb) {
    async.parallel([
        function(callback) {
          carCreate('Ferrari 458', makers[4], [models[2],], '2009-01-01', callback);
        },
        function(callback) {
          carCreate('Ford Explorer', makers[0], [models[1],], '1995-01-01', callback);
        },
        function(callback) {
          carCreate('Honda Accord', makers[1], [models[0],], '1990-01-01', callback);
        },
        function(callback) {
          carCreate('Toyota Camry', makers[2], [models[0],], '1991-01-01', callback);
        },
        function(callback) {
          carCreate('Mercedes-Benz C-Class', makers[3], [models[1],], '1994–present', callback);
        }
        ],
        // optional callback
        cb);
}


function createCarInstances(cb) {
    async.parallel([
        function(callback) {
          carInstanceCreate(cars[0], 'Discontinued', callback)
        },
        function(callback) {
          carInstanceCreate(cars[1], 'Available', callback)
        },
        function(callback) {
          carInstanceCreate(cars[2], 'Available', callback)
        },
        function(callback) {
          carInstanceCreate(cars[3], 'Available', callback)
        },
        function(callback) {
          carInstanceCreate(cars[4], 'Available', callback)
        }
        ],
        // Optional callback
        cb);
}



async.series([
    createModelMakers,
    createCars,
    createCarInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('CARInstances: '+carinstances);

    }
    // All done, disconnect from database
    mongoose.connection.close();
});



