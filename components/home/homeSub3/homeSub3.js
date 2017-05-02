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
.controller('homeSub3Ctrl',['$scope','$http',function($scope,$http){
	$http.get('json/home/homeSub/homeSub3.json').success(function(res){
		
		$scope.sub3=res.data;
		console.log('sub',$scope.sub3);
	})
}])