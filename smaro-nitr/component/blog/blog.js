module.controller("blog", blog);
function blog($rootScope, $scope, $window, $interval) {
	this.$onInit = function() {
		$rootScope.scrollToTop();
		$rootScope.navbarVisible = true;
		$rootScope.navbarContactVisible=true;
		$scope.loaderVisibility = true;
		$scope.promise = $interval(function(){
			if($window.document.readyState==="complete"){
				$scope.loaderVisibility = false;
				$interval.cancel($scope.promise);
			}
		}, 10);
	};
}
blog.$inject = ['$rootScope', '$scope', '$window', '$interval'];