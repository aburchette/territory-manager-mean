'use strict';

// Setting up route
angular.module('setup').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listArticles', {
			url: '/setup',
			templateUrl: 'modules/setup/views/index.html'
		})
	}
]);
