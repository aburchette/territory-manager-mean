'use strict';

angular.module('territories').factory('Territory', function($resource){
    return $resource('/api/territories/:id');
});
