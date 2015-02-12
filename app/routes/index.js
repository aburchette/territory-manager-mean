'use strict';

var passport = require('passport');

module.exports = function(app) {
	var core = require('../controllers');

    app.route('/').get(core.index);

};
