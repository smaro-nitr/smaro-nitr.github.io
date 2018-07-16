module.controller("home", home);
function home($scope, $state, $http) {
	this.$onInit = function() {
		$scope.codeNow();
		$scope.quickLink();
	};

	$scope.codeNow = function() {
		$http({
			method : "GET",
			url : "smaro-nitr/assets/mocker/codenow.json"
		}).then(function mySuccess(response) {
			$scope.codeNowData = response.data;
		}, function myError(response) {
			$scope.codeNowData = response.statusText;
		});
	};

	$scope.quickLink = function() {
		$http({
			method : "GET",
			url : "smaro-nitr/assets/mocker/quicklink.json"
		}).then(function mySuccess(response) {
			$scope.quickLinkData = response.data;
		}, function myError(response) {
			$scope.quickLinkData = response.statusText;
		});
	};
}
home.$inject = ['$scope', '$state', '$http'];