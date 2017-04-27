angular.module('homeModule',['homeSub4Module','homeSub0Module','me-lazyload'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller:'homeCtrl',
                css:'components/home/home.css'
            })
    })
    .controller('homeCtrl',['$scope','$http',"$location","$anchorScroll",function($scope,$http,$location,$anchorScroll){
    	
    	$scope.isShow = 1;
	    	
	    //点击搜索
	    $scope.aaaaa = function (){
	    	$scope.isShow=0;
	    	 $scope.isAct = false;
	    }
	    $scope.isAct = true;
	    $scope.hide = function (){
	    	$scope.isShow=1;
	    	 $scope.isAct = true;
	    }
//	    $('.head_search').on('click',function(){
//	    	aaaaa();
//	    })
	    
    	
    	$http.get('json/home/1.json').success(function(res){
    		console.log(res);
    		$scope.hotKeys = res.data['5868'].list;
    		$scope.homeBanner= res.data['5956'].list[0];
    		$scope.boxSlide = res.data['898989'].list;
	    	
    	});
    	$http.get('json/home/niuzaiku.json').success(function(res){
    		
    		$scope.niuzaiku = res.data;
    	});
    	//默认
    	$http.get('json/home/2.json').success(function(res){
//  		console.log(res);
    		$scope.morenProducts = res.data.list;
    		$scope.changePro = 	$scope.morenProducts;
    	});
    	$http.get('json/home/3.json').success(function(res){
    		console.log('arr',res.data.list);
    		$scope.morenProducts2 = res.data.list;
    		$scope.changePro2 = 	$scope.morenProducts2;
    		
    	});
    	$http.get('json/home/4.json').success(function(res){
    		
    		$scope.morenProducts3 = res.data.list;
//  		console.log($scope.morenProducts3);
//  		console.log($scope.morenProducts3[1].show.img);
    			$scope.changePro3 =$scope.morenProducts3;
    		
    		
    	});
    	//默认结束
    	//流行第二个
    	$http.get('json/home/hot1.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts4 = res.data.list;
    		
    	});
    	$http.get('json/home/hot2.json').success(function(res){
    		console.log(res);
    		$scope.morenProducts5 = res.data.list;
    		 
    		 
	    	 $('#main').on('scroll',function(){
		   			console.log($('#main').scrollTop());
				if($('#main').scrollTop()>1400)
				{	
					$('.J_toTop').show();
					$('.home_module_tab').addClass('change_fixed');
				}else{
					$('.home_module_tab').removeClass('change_fixed');
					$('.J_toTop').hide();
				}
	    	});
    	});
    	$scope.isact= 0;
    	
    	
    	$scope.changeProducts = function (num,data,data2,data3){
    		$scope.changePro= data;
    		$scope.changePro2 = data2;
    		$scope.changePro3 = data3;
    		$scope.isact= num;
    	}
    	
    		
    		$scope.changeMore = function (more){
    			
    			$http.get('json/home/niuzaiku_more.json').success(function(res){
    				$scope.more = res.data;
    			});
    			angular.element(document.querySelector('.more_clickOpenApp')).remove();
    			
    		}
    	
    	$scope.gotoTop = function(){
    		$location.hash('top');
    		$anchorScroll();
    	}
    	
    	$('.J_toTop').css('display','none');
    	//滚动事件

    }])
  