'use strict';

// Routes for the pages to set up the site
angular.module('setup').config(['$stateProvider',
	function($stateProvider) {
        $stateProvider.
			state('setup', {
                url: '/setup',
				templateUrl: 'modules/setup/views/index.html'
			}).
			state('setupUsers', {
                url: '/setup/users',
				templateUrl: 'modules/setup/views/users.html'
			}).
			state('setupPeople', {
                url: '/setup/people',
				templateUrl: 'modules/setup/views/people.html'
			}).
			state('setupMap', {
                url: '/setup/map',
				templateUrl: 'modules/setup/views/map.html'
			});
	}
]);
