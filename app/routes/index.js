'use strict';

var passport = require('passport');

module.exports = function(app) {
	var core = require('../../app/controllers/core');
    var users = require('../../app/controllers/users');

    app.route('/').get(core.index);
    app.route('/admin').get(core.admin);
    app.route('/signup').get(core.signup);
    app.route('/reset-password').get(core.resetPassword);

    // require authentication
    //app.all('/*/*', function(req, res, next){ console.log(req, res); next(); });

    app.route('/users/me').get(users.me);
    app.route('/users').put(users.update);
    app.route('/users/accounts').delete(users.removeOAuthProvider);

    // Setting up the users password api
    app.route('/users/password').post(users.changePassword);
    app.route('/auth/forgot').post(users.forgot);
    app.route('/auth/reset/:token').get(users.validateResetToken);
    app.route('/auth/reset/:token').post(users.reset);

    // Setting up the users authentication api
    app.route('/auth/signup').post(users.signup);
    app.route('/auth/signin').post(users.signin);
    app.route('/auth/signout').get(users.signout);

    // catch-all for other paths - requires login
    app.all('/*', core.app);

    // Finish by binding the user middleware
    app.param('userId', users.userByID);

};
