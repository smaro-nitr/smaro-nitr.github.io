module.service('saiService', saiService);

function saiService($http) {
    this.fetchJsonData = function(fileName) {
        var pathUrl = "sai/assets/mocker/"+fileName+".json";
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
saiService.$inject = ['$http'];