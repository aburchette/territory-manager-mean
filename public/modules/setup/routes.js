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
                url: '/users',
                controller: 'UsersCtrl',
                templateUrl: 'modules/setup/views/users.html'
            }).
            state('setup.users.detail', {
                url: '/{userId}',
                templateUrl: 'modules/setup/views/users.detail.html'
            }).
            state('setup.users.detail.edit', {
                url: '/edit',
                templateUrl: 'modules/setup/views/users.detail.edit.html'
            }).

            state('setup.admin', {
                url: '/admin',
                controller: 'AdminCtrl',
                templateUrl: 'modules/setup/views/admin.html'
            }).
            state('setup.admin.detail', {
                url: '/{adminId}',
                templateUrl: 'modules/setup/views/admin.detail.html'
            }).
            state('setup.admin.detail.edit', {
                url: '/edit',
                templateUrl: 'modules/setup/views/admin.detail.edit.html'
            }).

            state('setup.streets', {
                url: '/streets',
                controller: 'StreetsCtrl',
                templateUrl: 'modules/setup/views/streets.html'
            }).
            state('setup.upload', {
                url: '/upload',
                controller: 'UploadCtrl',
                templateUrl: 'modules/setup/views/upload.html'
            }).
            state('setup.map', {
                url: '/map',
                controller: 'MapCtrl',
                templateUrl: 'modules/setup/views/map.html'
            });
    }
]);
