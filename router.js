/*!
 * nodeclub - route.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var express = require('express');

var config = require('./config');

var router = express.Router();

// home page
var site = require('./controllers/site');
router.get('/', site.index);

module.exports = router;
