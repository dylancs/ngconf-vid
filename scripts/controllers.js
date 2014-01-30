'use strict';
	
angular.module('confControllers', ['confServices'])
	.controller('SessionsCtrl', ['$scope', 'Sessions', function($scope, Sessions) {
	   Sessions.getSessions().then(function(data) {
	       $scope.sessions = data;
	   });
	}])
	.controller('SessionCtrl', ['$scope', 'Sessions', '$routeParams', '$location', function($scope, Sessions, $routeParams, $location) {
	   Sessions.getSessions().then(function(data) {
	       if (!data[$routeParams.sessionId]) {
	           $location.path("/");
	       }
	       $scope.session = data[$routeParams.sessionId];
	   });
	}]);		