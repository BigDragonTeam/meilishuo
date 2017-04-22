angular.module('homeSub0Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeSub0',{
            url: '/homeSub0',
            templateUrl: 'components/home/homeSub0/homeSub0.html',
            controller:'homeSub0Ctrl',
            css:['components/home/home.css','components/home/homeSub0/homeSub0.css']
        })
})
.controller('homeSub0Ctrl',['$scope','$http',function($scope,$http){
	$http.get('json/home/homeSub/homeSub1.json').success(function(res){
		console.log(res);
		$scope.singelGoods = res.data['45767'];
		$scope.singelGoods2 = res.data['45487'];
	})
}])