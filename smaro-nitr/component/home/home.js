module.controller("home", home);

function home(snService, $rootScope, $scope) {
	this.$onInit = function() {
		//sessionStorage.setItem("accesstype","desktopapp");
		$rootScope.navbarVisible = true;
		if(sessionStorage.getItem("accesstype") && sessionStorage.getItem("accesstype")=="desktopapp"){
			$rootScope.navbarContactVisible=false;
			$scope.accesstype="desktopapp";
		}else{
			$rootScope.navbarContactVisible=true;
		}
		$scope.codeNow("codenow");
		$scope.quickLink("quicklink");
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
home.$inject = ['snService', '$rootScope', '$scope'];