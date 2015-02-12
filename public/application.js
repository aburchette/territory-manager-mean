'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(AppConfig.name, AppConfig.deps);

// Setting HTML5 Location Mode
angular.module(AppConfig.name).config(['$locationProvider',
	function($locationProvider) {
        //console.log($browser);
        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('/');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {

	//Init the app
	angular.bootstrap(document, [AppConfig.name]);
});
