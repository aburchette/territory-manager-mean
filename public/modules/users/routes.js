'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
            //state('profile', {
            //    url: '/settings/profile',
            //    templateUrl: 'modules/users/views/edit-profile.html'
            //}).
            state('password', {
                url: '/password',
                templateUrl: 'modules/users/views/change-password.html'
            }).
            state('signup', {
                url: '/signup',
                templateUrl: 'modules/users/views/signup.html'
            }).
            state('signin', {
                url: '/signin',
                templateUrl: 'modules/users/views/signin.html'
            }).
            state('forgot', {
                url: '/password/forgot',
                templateUrl: 'modules/users/views/forgot-password.html'
            }).
            state('reset-invalid', {
                url: '/password/reset/invalid',
                templateUrl: 'modules/users/views/reset-password-invalid.html'
            }).
            state('reset-success', {
                url: '/password/reset/success',
                templateUrl: 'modules/users/views/reset-password-success.html'
            }).
            state('reset', {
                url: '/password/reset/:token',
                templateUrl: 'modules/users/views/reset-password.html'
            });
	}
]);
