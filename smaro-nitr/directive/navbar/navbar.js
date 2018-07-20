module.directive("customNavbar", customNavbar);

function customNavbar(){
    return {
        scope:{},
        controller: controller,
        templateUrl : "smaro-nitr/directive/navbar/navbar.html"
    };
}

function controller($rootScope, $window) {
    this.$onInit = function () {
        $rootScope.navbarVisible=true;
        $rootScope.navbarContactVisible=true;
        $rootScope.scrollToTop = function(){
            $window.scrollTo(0, 0);
        }
    };
}
controller.$inject = ['$rootScope', '$window'];