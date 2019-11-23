module.service('snService', snService);

function snService($http) {
    this.fetchJsonData = function(fileName) {
        var pathUrl = "smaro-nitr/assets/mocker/"+fileName+".json";
		return $http({
			method: 'GET',
			url: pathUrl
        }).then(
            function success(data) {
			    return data.data;
            }, 
            function response() {
			    return [];
            }
        )
    };
}
snService.$inject = ['$http'];