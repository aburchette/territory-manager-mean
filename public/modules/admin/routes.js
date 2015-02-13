'use strict';

// Routing for all territory-related urls
angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider.
            state('admin', {
                url: '/admin',
                controller: 'AdminCtrl',
                templateUrl: 'modules/admin/views/admin.html'
            });
    }
]);
