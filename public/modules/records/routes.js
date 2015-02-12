'use strict';

// Routing for all territory-related urls
angular.module('records').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('records', {
                url: '/' + group + '/records',
                controller: 'RecordsCtrl',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('recordsSort', {
                url: '/records/sort/{sortId}',
                controller: 'RecordsCtrl',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('recordsFilter', {
                url: '/records/filter/{filterId}',
                controller: 'RecordsCtrl',
                templateUrl: 'modules/records/views/records.html'
            }).
            state('recordsSortAndFilter', {
                url: '/records/sort/{sortId}/filter/{filterId}',
                controller: 'RecordsCtrl',
                templateUrl: 'modules/records/views/records.html'
            }).

            state('record', {
                url: '/records/{recordId}',
                controller: 'RecordCtrl',
                templateUrl: 'modules/records/views/record.html'
            }).
            state('recordEdit', {
                url: '/records/{recordId}/edit',
                controller: 'RecordCtrl',
                templateUrl: 'modules/records/views/record-edit.html'
            });
    }
]);
