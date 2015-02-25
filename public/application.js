'use strict';

// define module and dependencies
angular.module(AppConfig.name, AppConfig.deps);

// application configuration
angular.module(AppConfig.name).
    config(['$locationProvider',
        function($locationProvider) {
            // removes hashtag in modern browsers
            //$locationProvider.html5Mode(true).hashPrefix('!');
        }
    ]);

// Bootstrap the app
angular.element(document).ready(function() {
	angular.bootstrap(document, [AppConfig.name]);
});
