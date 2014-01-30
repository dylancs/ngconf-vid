'use strict';

angular.module('confApp', ['ngRoute', 'ngAnimate', 'confServices', 'confControllers', 'confDirectives', 'confFilters'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/sessions.html',
				controller: 'SessionsCtrl'
			})
			.when('/:sessionId', {
				templateUrl: 'partials/session.html',
				controller: 'SessionCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});			
	}]
);