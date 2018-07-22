module.controller("home", home);
function home(snService, $rootScope, $scope, $window, $interval, $location) {
	this.$onInit = function() {
		$window.scrollTo(0, 0);
		if($scope.accessMode("apptype")=="desktopapp"){
			$rootScope.navbarVisible = false;
			$rootScope.navbarContactVisible=false;
			$scope.accesstype="desktopapp";
		}else{
			$rootScope.navbarVisible = true;
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

	$scope.accessMode = function(param){
		$scope.paramLength = param.length;
		$scope.locationHash = $location.url();
		$scope.paramValue = ($scope.locationHash.search("apptype")=="-1")?"":$scope.locationHash.substring($scope.locationHash.search("apptype")+$scope.paramLength+1, $scope.locationHash.length)
		return $scope.paramValue;
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
home.$inject = ['snService', '$rootScope', '$scope', '$window', '$interval', '$location'];