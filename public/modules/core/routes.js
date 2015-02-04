'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
        $stateProvider.
            state('territories', {
                url: '/',
                templateUrl: 'modules/core/views/territories.html'
            }).
            state('territories.territory', {
                url: '/territories/:territoryId',
                templateUrl: 'modules/core/views/territory.html'
            }).
			state('main', {
                url: '/main',
				templateUrl: 'modules/core/views/home.html'
			});
	}
]);
