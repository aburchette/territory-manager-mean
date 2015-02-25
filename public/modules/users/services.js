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
