'use strict';

var passport = require('passport');

module.exports = function(app) {
	var core = require('../controllers');

    app.all('/*', core.index);

};
