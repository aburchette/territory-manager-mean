'use strict';

// Routing for all territory-related urls
angular.module('help').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('help', {
                url: '/help',
                controller: 'HelpCtrl',
                templateUrl: 'modules/help/views/help.html'
            }).
            state('help.tickets', {
                url: '/tickets',
                controller: 'TicketsCtrl',
                templateUrl: 'modules/help/views/tickets.html'
            }).
            state('help.tickets.detail', {
                url: '/{ticketId}',
                controller: 'TicketCtrl',
                templateUrl: 'modules/help/views/tickets.detail.html'
            }).
            state('help.faq', {
                url: '/faq',
                controller: 'FaqCtrl',
                templateUrl: 'modules/help/views/faq.html'
            }).
            state('help.chat', {
                url: '/chat',
                controller: 'ChatCtrl',
                templateUrl: 'modules/help/views/chat.html'
            });

    }
]);
