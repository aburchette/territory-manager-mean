'use strict';

// main controller with 'global' functionality
angular.module(AppConfig.name).
    controller('TMCtrl', ['$scope', 'USER_ROLES', 'AuthService', function($scope, USER_ROLES, AuthService){
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };

        console.log($scope);
        $scope.isSuperAdmin = function(){
            return user.role === 'superAdmin';
        }
    }]);
