'use strict';

angular.module('help').
    controller('HelpCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('TicketsCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('TicketCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('FaqCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('ChatCtrl', ['$scope', 'Socket', function($scope, Socket){
        $scope.messages = [];

        Socket.on('chatMessage', function(message){
            $scope.messages.push(message);
        });

        $scope.sendMessage = function(){
            var message = {
                text: this.messageText
            };

            Socket.emit('chatMessage', message);

            this.messageText = '';
        };

        $scope.$on('$destroy', function(){
            Socket.removeListener('chatMessage');
        });
    }]);
