angular.module('homeSub4Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeSub4',{
            url: '/homeSub4',
            templateUrl: 'components/home/homeSub4/homeSub4.html',
            controller:'homeSub4Ctrl',
            css:['components/home/home.css','components/home/homeSub4/homeSub4.css']
        })
})
.controller('homeSub4Ctrl',['$scope','$http',function($scope,$http){
	$scope.isAct = false;
	$scope.changebot = function(){
		$scope.isAct = !false;
	}
	$http.get('json/home/homeSub/homeSub4.json').success(function(res){
		console.log(res);
		$scope.firstSale = res.data['45622'];
		
	})
}])