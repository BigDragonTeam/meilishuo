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
.controller('homeSub1Ctrl',['$scope','$http',function($scope,$http){
	$http.get('json/home/homeSub/homeSub2.json').success(function(res){
	
		$scope.sub1Producs = res.data.rows;
		$scope.changePro1 = $scope.sub1Producs;
		
	});
	$http.get('json/home/homeSub/homeSub1.json').success(function(res){
		console.log(res);
		$scope.singelGoods = res.data['45493'];
		$scope.singelGoods2 = res.data['45487'];
		
	});
	
	$scope.changeSub1Pro = function(num,name1,name2,name3){
		$scope.changePro2 =  name2;
		$scope.changePro1 = name1;
		$scope.changePro3 = name3;
		$scope.isNum = num;
	}
}])