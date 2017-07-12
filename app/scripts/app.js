(function(){
    function config($locationProvider, $stateProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            //might work
            .state('old', {
                url: '/old',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/old.html'
            });
    }

    angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);
})();