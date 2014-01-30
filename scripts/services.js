'use strict';

angular.module('confServices', [])
	.factory('Sessions', function($http) {
	   return {
	     getSessions: function() {
	       return $http.get('data/sessions.json', { cache: true }).then(function(result) {
	           return result.data;
	       });
	     }
	   }
	});