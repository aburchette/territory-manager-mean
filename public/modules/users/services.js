'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

// Authentication service for user variables
angular.module('users').factory('Authentication', [

	function() {
        return {
			user: window.user
		};
	}
]);


angular.module('users').
    constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    }).
    constant('USER_ROLES', {
        superAdmin: 'superAdmin',
        admin: 'admin',
        edit: 'edit',
        view: 'view'
    }).
    factory('AuthService', function($http, Session){
        var authService = {};

        authService.signin = function(credentials){
            return $http
                .post('/api/signin', credentials)
                .then(function (res) {
                    console.log(res);
                    Session.create(res.data._id, res.data.username, res.data.role);
                    return res.data.username;
                });
        };

        authService.isAuthenticated = function () {
            return !!Session.userId;
        };

        authService.isAuthorized = function (authorizedRoles) {
            if(!angular.isArray(authorizedRoles)){
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        return authService;
    }).
    service('Session', function () {
        this.create = function (sessionId, userId, username, userRole, userGroup) {
            this.id = sessionId;
            this.userId = userId;
            this.username = username;
            this.userRole = userRole;
            this.userGroup = userGroup;
        };
        this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.username = null;
            this.userRole = null;
            this.userGroup = null;
        };
        return this;
    });
