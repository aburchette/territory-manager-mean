'use strict';

var passport = require('passport');

module.exports = function(app) {
	var core = require('../../app/controllers/core');
    var users = require('../../app/controllers/users');

    app.route('/').
        get(core.index);
    //app.route('/admin').
    //    get(core.admin);
    app.route('/api/signup').
        get(core.signup).
        post(users.signup);
    app.route('/api/reset-password').
        get(core.resetPassword);
    app.route('/api/signin').
        post(users.signin);
    app.route('/api/signout').
        get(users.signout);

    // require authentication
    //app.all('/*/*', function(req, res, next){ console.log(req, res); next(); });

    app.route('/users/me').get(users.me);
    app.route('/users').put(users.update);

    // Setting up the users password api
    app.route('/users/password').
        post(users.changePassword);
    app.route('/api/forgot').
        post(users.forgot);
    app.route('/api/reset/:token').
        get(users.validateResetToken);
    app.route('/api/reset/:token').
        post(users.reset);

    // catch-all for other paths - requires login
    app.all('/*', core.app);

    // Finish by binding the user middleware
    app.param('userId', users.userByID);

};
