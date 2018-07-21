module.controller("sai-home", saiHome);
function saiHome(saiService, $rootScope, $scope, $window, $interval, $location) {
	this.$onInit = function() {		
		if($scope.accessMode("apptype")=="desktopapp"){
			$rootScope.navbarVisible = false;
			$scope.accesstype="desktopapp";
		}else{
			$rootScope.navbarVisible = true;
			$rootScope.navbarContactVisible=true;
		}
		$scope.loaderVisibility = true;
		$rootScope.scrollToTop();
		$scope.appStatus("appstatus");
		$scope.faqDetail("faqdetail");
		$scope.promise = $interval(function(){
			if($window.document.readyState==="complete"){
				$scope.loaderVisibility = false;
				$scope.startCarousel();
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

	$scope.startCarousel =  function(){
		$(document).ready(function(){
			$('.carousel').carousel({
				interval: 3600,
				pause: "false"
			})
		}); 
	}

	$scope.appStatus = function(fileName) {
		saiService.fetchJsonData(fileName)
		.then(function (response) {
			if (response.status) {
				$scope.errorMsg = "failed to fetch appstatus json";
			}else{
				$scope.appStatusData = response;
				$scope.appStatusDataLength = $scope.appStatusData.length;
			}
		});
	};

	$scope.faqDetail = function(fileName) {
		saiService.fetchJsonData(fileName)
		.then(function (response) {
			if (response.status) {
				$scope.errorMsg = "failed to fetch faqdetail json";
			}else{
				$scope.faqDetailData = response;
			}
		});
	};
}
saiHome.$inject = ['saiService', '$rootScope', '$scope', '$window', '$interval', '$location'];