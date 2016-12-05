/**
 * Module dependencies
 */

const http = require('http');
const express = require('express');
const mysql = require('mysql');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to mysql
*/
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kemar',
    database: 'testdb'
});

connection.end();

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const calculatorController = require('./controllers/calculator');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(express.static(path.join(__dirname, 'client')));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/calculator', calculatorController.index);
app.get('/test', calculatorController.sayYow);
app.post('/test2', homeController.calculateRandom);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));

    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;