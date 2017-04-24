angular.module('homeModule',['homeSub4Module','homeSub0Module'])
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
    	//默认
    	$http.get('json/home/2.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts = res.data.list;
    		$scope.changePro = 	$scope.morenProducts;
    	});
    	$http.get('json/home/3.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts2 = res.data.list;
    		
    	});
    	$http.get('json/home/4.json').success(function(res){
    		
    		$scope.morenProducts3 = res.data.list;
    		console.log($scope.morenProducts3);
    		console.log($scope.morenProducts3[1].show.img);
    		
    		 var url;
            var ary = [];
            for(var i = 0; i < $scope.morenProducts3.length; i++){
            	url = $scope.morenProducts3[i].show.img;
                ary.push(url + '&t=' + i + (+new Date()));
            }
			
            $scope.images = ary;
            console.log($scope.images);
    		
    	});
    	//默认结束
    	//流行第二个
    	$http.get('json/home/hot1.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts4 = res.data.list;
    		
    	});
    	$http.get('json/home/hot2.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts4 = res.data.list;
    		
    	});
    	$scope.isact= 0;
    	
    	
    	$scope.changeProducts = function (num,data,data2,data3){
    		$scope.changePro= data;
    		$scope.changePro2 = data2;
    		$scope.changePro3 = data3;
    		$scope.isact= num;
    	}
    	
    }])
  