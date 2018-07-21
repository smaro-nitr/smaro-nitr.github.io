module.controller("home", home);
function home(snService, $rootScope, $scope, $window, $interval) {
	this.$onInit = function() {
		$rootScope.navbarVisible = true;
		$rootScope.scrollToTop();
		if(sessionStorage.getItem("accesstype") && sessionStorage.getItem("accesstype")=="desktopapp"){
			$rootScope.navbarContactVisible=false;
			$scope.accesstype="desktopapp";
		}else{
			$rootScope.navbarContactVisible=true;
		}
		$scope.loaderVisibility = true;
		$scope.codeNow("codenow");
		$scope.quickLink("quicklink");
		$scope.promise = $interval(function(){
			if($window.document.readyState==="complete"){
				$scope.loaderVisibility = false;
				$interval.cancel($scope.promise);
			}
		}, 10);
	};

	$scope.codeNow = function(fileName) {
		snService.fetchJsonData(fileName)
		.then(function (response) {
			if (response.status) {
				$scope.errorMsg = "failed to fetch codenow json";
			}else{
				$scope.codeNowData = response;
			}
		});
	};

	$scope.quickLink = function(fileName) {
		snService.fetchJsonData(fileName)
		.then(function (response) {
			if (response.status) {
				$scope.errorMsg = "failed to fetch quicklink json";
			}else{
				$scope.quickLinkData = response;
			}
		});
	};
}
home.$inject = ['snService', '$rootScope', '$scope', '$window', '$interval'];