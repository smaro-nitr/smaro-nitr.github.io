module.controller("sai-home", saiHome);

function saiHome(saiService, $rootScope, $scope) {
	this.$onInit = function() {
		//sessionStorage.setItem("accesstype","desktopapp");
		if(sessionStorage.getItem("accesstype") && sessionStorage.getItem("accesstype")=="desktopapp"){
			$rootScope.navbarVisible = false;
			$scope.accesstype="desktopapp";
		}else{
			$rootScope.navbarVisible = true;
		}
		$scope.startCarousel();
		$scope.appStatus("appstatus");
		$scope.faqDetail("faqdetail");
	};

	$scope.startCarousel =  function(){
		$(document).ready(function(){
			$('.carousel').carousel({
				interval: 2000
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
saiHome.$inject = ['saiService', '$rootScope', '$scope'];