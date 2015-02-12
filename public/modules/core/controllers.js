'use strict';

angular.module('main').
    controller('MainCtrl', ['$scope', '$http', '$stateParams', '$location', 'Authentication',
        function($scope, $http, $stateParams, $location, Authentication){
        //if(!Authentication.user){
        //    $location.path('#/signin');
        //}
        $scope.params = $stateParams;
        $scope.displayName = user.displayName || null;


    }]);
