angular.module("myApp", ["firebase", "angular-carousel-3d", "ui.router" ,"ngMaterial"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'view/teamname.html',
           controller: 'teamNameCtrl'
        })

        // PlayerInfo PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('playerinfo', {
            url: '/playerinfo?teamname',
            templateUrl: 'view/teaminfo.html',
            controller: 'teamInfoCtrl'
        });
    });
