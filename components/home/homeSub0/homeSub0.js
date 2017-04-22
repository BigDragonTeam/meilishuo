angular.module('homeSub0Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeSub0',{
            url: '/homeSub0',
            templateUrl: 'components/home/homeSub0/homeSub0.html',
            controller:'homeSub0Ctrl',
            css:['components/home/homeSub0/homeSub0.css']
        })
})
.controller('homeSub0Ctrl',['$scope',function($scope){
	
}])