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
		$scope.singelGoods3 = res.data['45493'];  
		$scope.singelGoods4 = res.data['45496'];       
		$scope.singelGoods5 = res.data['45497'];      
		$scope.singelGoods6 = res.data['45498'];
		$scope.singelGoods7 = res.data['45499'];
	});
	//点击触发滚动
				$('.a1').on('click',function(){
	   				ItemScroll(1400);
	   			});
	   			$('.a2').on('click',function(){
	   				ItemScroll(1900);
	   			});
	   			$('.a3').on('click',function(){
	   				ItemScroll(3100);
	   			});
	   			$('.a4').on('click',function(){
	   				ItemScroll(13047);
	   			});
	   			$('.a5').on('click',function(){
	   				ItemScroll(23047);
	   			});
	   			$('.a6').on('click',function(){
	   				ItemScroll(30246);
	   			});
	   			$('.a7').on('click',function(){
	   				ItemScroll(39747);
	   			});
	   			$('.a8').on('click',function(){
	   				ItemScroll(46467);
	   			});
	   	
	   	
	   	
	   	
	   	
	   	
	   			function ItemScroll(height){
	   			
	   				$('#main').animate({ scrollTop:height }, 500);
	   			};
	   			
	 $('#main').on('scroll',function(){
//	   			console.log($('#main').scrollTop());
	   			
	   			//滚动
			if($('#main').scrollTop()>1400)
			{	
				$('.J_toTop').show();
				$('.j_nav').addClass('change_fixed');
				
				
				if($('#main').scrollTop()<1900)
				{
					$('.a1').addClass('sub0_act');
					$('.a1').siblings().removeClass('sub0_act');
				}
				else if($('#main').scrollTop()<3100)
				{
					$('.a2').addClass('sub0_act');
					$('.a2').siblings().removeClass('sub0_act');
				}else if($('#main').scrollTop()<13047)
				{
					$('.a3').addClass('sub0_act').siblings().removeClass('sub0_act');
				}
				else if($('#main').scrollTop()<21047)
				{
					$('.a4').addClass('sub0_act').siblings().removeClass('sub0_act');
				}
				
			}else{
				$('.j_nav').removeClass('change_fixed');
				$('.J_toTop').hide();
			}
    	});
}])