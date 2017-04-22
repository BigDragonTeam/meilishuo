angular.module('homeSub1Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeSub1',{
            url: '/homeSub1',
            templateUrl: 'components/home/homeSub1/homeSub1.html',
            controller:'homeSub1Ctrl',
            css:['components/home/home.css','components/home/homeSub1/homeSub1.css']
        })
})
.controller('homeSub1Ctrl',['$scope',function($scope){
	
}])