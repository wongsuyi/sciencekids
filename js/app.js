var scienceKids = angular.module('scienceKids', ['ngRoute']);

scienceKids.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})
		.when('/classes', {
			templateUrl : 'views/classes.html',
			controller  : 'classesController'
		})
		.when('/signup', {
			templateUrl : 'views/signup.html',
			controller  : 'signupController'
		})
		.when('/blog', {
			templateUrl : 'views/blog.html',
			controller  : 'blogController'
		})
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller  : 'contactController'
		});
});

scienceKids.controller('homeController', function($scope, $http, $routeParams) {
});

scienceKids.controller('classesController', function($scope, $http, $routeParams) {
});

scienceKids.controller('signupController', function($scope, $http, $routeParams) {
	var loadingEl = document.querySelector("div#signup-loading");
	
	if (loadingEl) {
		var refreshIntervalId = setInterval(function checkElRender() {
			var iframeEl = document.querySelector("div.powr-contact-form#27dc3c6c_1457059444114 iframe");
			if (iframeEl) {
				clearInterval(refreshIntervalId);
				iframeEl.onload = function () {
					loadingEl.style.display = "none";
				}
			}
		}, 500);
	}
});

scienceKids.controller('blogController', function($scope, $http, $routeParams) {
});

scienceKids.controller('contactController', function($scope, $http, $routeParams) {
});
