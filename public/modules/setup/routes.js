'use strict';

// Routing for all territory-related urls
angular.module('setup').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('setup', {
                url: '/setup',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/setup.html'
            }).

            state('setup.users', {
                url: '/setup/users',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/users.html'
            }).
            state('setup.users.detail', {
                url: '/setup/users/{userId}',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/users.detail.html'
            }).
            state('setup.users.detail.edit', {
                url: '/setup/users/{userId}',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/users.detail.edit.html'
            }).

            state('setup.admin', {
                url: '/setup/admin',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/admin.html'
            }).
            state('setup.admin.detail', {
                url: '/setup/admin/{adminId}',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/admin.detail.html'
            }).
            state('setup.admin.detail.edit', {
                url: '/setup/admin/{adminId}',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/admin.detail.edit.html'
            }).

            state('setup.streets', {
                url: '/setup/streets',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/streets.html'
            }).
            state('setup.upload', {
                url: '/setup/upload',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/upload.html'
            }).
            state('setup.map', {
                url: '/setup/map',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/map.html'
            });
    }
]);
