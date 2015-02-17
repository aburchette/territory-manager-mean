'use strict';

angular.module('setup').
    controller('SetupCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('UsersCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('AgentsCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('DrawMapCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('StreetsCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]).
    controller('ImportCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

        // retrieve from actual models
        $scope.items = [
            {value: 'user', name: 'Users'},
            {value: 'territory', name: 'Territories'},
            {value: 'record', name: 'Records'},
            {value: 'agent', name: 'Agents'},
            {value: 'agent-territory-index', name: 'Agent-Territory Index'},
            {value: 'config', name: 'Configuration'}

        ];

    }])
;
