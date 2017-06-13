// Dependencies
var express = require('express');
var router = express.Router();
var json2csv = require('json2csv');
var jsonexport = require('jsonexport');
var fs = require('fs');
var auth = require('./auth.js');
var dateformat = require('dateformat');
var _ = require('lodash');

// Models
var Causa = require('../models/causa');
var User = require('../models/user');
var authentication = require('../middlewares/validateRequest');

/*****************************************************************************/
/* Causa */
/*****************************************************************************/
Causa.methods(['get', 'put', 'post', 'delete']);
Causa.before('get').before('put').before('delete').before('post');
Causa.register(router, '/causa');

/*****************************************************************************/
/* Causa */
/*****************************************************************************/
Causa.methods(['get', 'put', 'post', 'delete']);
Causa.before('get').before('put').before('delete').before('post');
Causa.register(router, '/causa');

/*****************************************************************************/
/* Usuario */
/*****************************************************************************/
User.methods(['get', 'put', 'post', 'delete']);
User.before('get', authentication).before('put').before('delete', authentication).before('post');
User.register(router, '/user');

/* autenticacao */
router.post('/login', auth.login);

// Return router
module.exports = router;
