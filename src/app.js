'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

const Product = require('./models/product')

mongoose.connect('mongodb+srv://icaro:ZDSK8lhkTxSkI8qo@cluster0.p4wykd9.mongodb.net/?retryWrites=true&w=majority');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;