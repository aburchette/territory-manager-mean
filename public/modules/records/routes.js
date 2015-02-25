'use strict';

// Routing for all territory-related urls
angular.module('records').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('records', {
                url: '/' + user.group + '/records',
                controller: 'RecordsCtrl',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('records.filter', {
                url: '/filter/{filterId}',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('records.filter.sort', {
                url: '/sort/{sortId}',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('records.sort', {
                url: '/sort/{sortId}',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('records.sort.filter', {
                url: '/filter/{filterId}',
                templateUrl: 'modules/records/views/records.html'
            }).

            state('record', {
                url: '/' + user.group + '/records/{recordId}',
                controller: 'RecordCtrl',
                templateUrl: 'modules/records/views/record.html'
            }).
            state('record.edit', {
                url: '/edit',
                templateUrl: 'modules/records/views/record-edit.html'
            });
    }
]);
