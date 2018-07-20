module.controller("gallery", gallery);
function gallery($rootScope, $scope) {
	this.$onInit = function() {
		$rootScope.navbarVisible = true;
		$rootScope.scrollToTop();
	};
}
gallery.$inject = ['$rootScope', '$scope'];