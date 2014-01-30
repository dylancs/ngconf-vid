'use strict';

angular.module('confDirectives', [])
	.directive('coYoutube', ['$sce', function($sce) {
	   return {
	   		restrict: 'E',
	   		scope: {
	   			videoid: '@'
	   		},
	   		templateUrl: 'partials/youtube.html',
	   		link: function(scope) {
	   			scope.$watch('videoid', function (value) {
	   				scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + value);
	   			});
	   		}
	   }
	}]);