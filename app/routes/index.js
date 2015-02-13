'use strict';

var passport = require('passport');

module.exports = function(app) {
	var core = require('../controllers');

    app.route('/api/signup').
        post(core.signup);

    app.route('/api/signin').
        post(core.signin);

    app.all('/*', core.index);
    //app.all('/', core.index);
};
