const module = angular.module("myApp", [ "ui.router" ]);

module.config(function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$stateProvider
	.state("home", {
		url : "/home",
		templateUrl : "smaro-nitr/component/home/home.html",
		controller : "home"
	})
	.state("gallery", {
		url : "/gallery",
		templateUrl : "smaro-nitr/component/gallery/gallery.html",
		controller : "gallery"
	})
	.state("blog", {
		url : "/blog",
		templateUrl : "smaro-nitr/component/blog/blog.html",
		controller : "blog"
	})
	.state("sai-home", {
		url : "/sai-home",
		templateUrl : "sai/component/sai-home/sai-home.html",
		controller : "sai-home"
	})
	.state("coming-soon", {
		url : "/coming-soon",
		templateUrl : "coming-soon.html"
	})
});
