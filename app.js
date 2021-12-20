require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usiariosRouter = require('./routes/usuarios');
var centrosRouter = require('./routes/centros');
var infoRouter = require('./routes/informacion');
var identificadorRouter = require('./routes/identificador');
var materialRouter = require('./routes/materiales');

var app = express();

app.use(logger('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usiariosRouter);
app.use('/centros', centrosRouter);
app.use('/informaciones', infoRouter);
app.use('/identificador', identificadorRouter);
app.use('/materiales', materialRouter);

module.exports = app;
