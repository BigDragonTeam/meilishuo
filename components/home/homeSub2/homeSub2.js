angular.module('homeSub2Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeSub2',{
            url: '/homeSub2',
            templateUrl: 'components/home/homeSub2/homeSub2.html',
            controller:'homeSub2Ctrl',
            css:['components/home/home.css','components/home/homeSub2/homeSub2.css']
        })
})
.controller('homeSub2Ctrl',['$scope',function($scope){
	
}])