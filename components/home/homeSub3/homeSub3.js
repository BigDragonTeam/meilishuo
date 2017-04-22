angular.module('homeSub3Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeSub3',{
            url: '/homeSub3',
            templateUrl: 'components/home/homeSub3/homeSub3.html',
            controller:'homeSub3Ctrl',
            css:['components/home/home.css','components/home/homeSub3/homeSub3.css']
        })
})
.controller('homeSub3Ctrl',['$scope',function($scope){
	
}])