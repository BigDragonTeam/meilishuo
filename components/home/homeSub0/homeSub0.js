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
	});
	 $('#main').on('scroll',function(){
	   			console.log($('#main').scrollTop());
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
				}else if($('#main').scrollTop()<6400)
				{
					$('.a3').addClass('sub0_act').siblings().removeClass('sub0_act');
				}
				else if($('#main').scrollTop()<1100)
				{
					$('.a4').addClass('sub0_act').siblings().removeClass('sub0_act');
				}
			}else{
				$('.j_nav').removeClass('change_fixed');
				$('.J_toTop').hide();
			}
    	});
}])