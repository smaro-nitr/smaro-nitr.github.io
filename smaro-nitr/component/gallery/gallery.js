module.controller("gallery", gallery);
function gallery($rootScope, $scope, $timeout) {
	this.$onInit = function() {
		$rootScope.navbarVisible = true;
		$rootScope.scrollToTop();
		$scope.loaderVisibility = true;
		$timeout(function(){
			$scope.loaderVisibility = false;
		}, 1000);
	};
}
gallery.$inject = ['$rootScope', '$scope', '$timeout'];