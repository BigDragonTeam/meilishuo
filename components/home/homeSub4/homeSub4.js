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
	$scope.isAct =0;
	
	$scope.changebot = function(num,arr){
		$scope.productsShow = arr;
		$scope.isAct = num;
	}
	
	$http.get('json/home/homeSub/homeSub4.json').success(function(res){
		console.log(res);
		$scope.firstSale = res.data['45622'];
		$scope.secondSale = res.data['45626'];
		$scope.productsShow =$scope.firstSale.list;
	});
	//滚动事件
	   $(window).scroll(function(event){
			$('')
    });
}])