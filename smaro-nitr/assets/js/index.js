const module = angular.module("myApp", [ "ui.router" ]);

module.config(function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$stateProvider
	.state("home", {
		url : "/home",
		templateUrl : "smaro-nitr/component/home/home.html",
		controller : "home"
	})
	$urlRouterProvider.otherwise("/home");
});