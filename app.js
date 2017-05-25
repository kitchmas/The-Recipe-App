const express = require('express');
const recipeController = require('./controllers/recipeController');
const homeController = require('./controllers/homeController');

//middlware
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//ES6 Promises
mongoose.Promise = global.Promise;
//connect to mongodb
mongoose.connect('mongodb://localhost/recipe');

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to the database');
});


//set up template engine
app.set('view engine', 'ejs');

//middlware

//static files
app.use(express.static('public'));
app.use(express.static('views'));

//use body-parser must come before routes
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


//handes the routes
app.use(require('./controllers'))


//listen to port
app.listen(2000);
console.log('You are listeing to port 2000');
