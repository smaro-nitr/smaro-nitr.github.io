module.controller("blog", blog);
function blog($rootScope, $scope, $timeout) {
	this.$onInit = function() {
		$rootScope.navbarVisible = true;
		$rootScope.scrollToTop();
		$scope.loaderVisibility = true;
		$timeout(function(){
			$scope.loaderVisibility = false;
		}, 1000);
	};
}
blog.$inject = ['$rootScope', '$scope', '$timeout'];