module.controller("blog", blog);
function blog($rootScope, $scope) {
	this.$onInit = function() {
		$rootScope.navbarVisible = true;
		$rootScope.scrollToTop();
	};
}
blog.$inject = ['$rootScope', '$scope'];