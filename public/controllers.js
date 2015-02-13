'use strict';

// main controller with 'global' functionality
angular.module(AppConfig.name).
    controller('TMCtrl', ['$scope', function($scope){
        $scope.isSuperAdmin = function(){
            return user.role === 'superAdmin';
        }
    }]);
