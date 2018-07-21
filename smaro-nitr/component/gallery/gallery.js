module.controller("gallery", gallery);
function gallery($rootScope, $scope, $window, $interval) {
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
gallery.$inject = ['$rootScope', '$scope', '$window', '$interval'];