angular.module('homeModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller:'homeCtrl',
                css:'components/home/home.css'
            })
    })
    .controller('homeCtrl',['$scope','$http',function($scope,$http){
    	$http.get('json/home/1.json').success(function(res){
    		
    		$scope.homeBanner= res.data['5956'].list[0];
    		$scope.boxSlide = res.data['898989'].list;
    		
    	});
    	$http.get('json/home/niuzaiku.json').success(function(res){
    		
    		$scope.niuzaiku = res.data;
    	});
    	$http.get('json/home/2.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts = res.data.list;
    		
    	});
    	$http.get('json/home/3.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts2 = res.data.list;
    		
    	});
    	$http.get('json/home/4.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts3 = res.data.list;
    		
    	})
    }]);