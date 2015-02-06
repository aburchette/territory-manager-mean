'use strict';

// Init the application configuration module for AngularJS application
var AppConfig = (function() {
	// Init module configuration options
	var name = 'tm';
	var deps = ['ngResource', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(name).requires.push(moduleName);
	};

	return {
		name: name,
        deps: deps,
		registerModule: registerModule
	};
})();
