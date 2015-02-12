'use strict';

// Routing for all territory-related urls
angular.module('main').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.
            state('main', {
                url: '/' + group,
                controller: 'MainCtrl',
                templateUrl: 'modules/core/views/main.html'
            });
    }
]);
