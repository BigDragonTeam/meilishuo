angular.module('cartModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('cart',{
                url: '/cart',
                templateUrl: 'components/cart/cart.html',
                controller:'cartCtrl',
                css:'components/cart/cart.css'
            })
    })
    .controller('cartCtrl',['$scope',function($scope){
        $scope.arr = JSON.parse(localStorage.getItem('carGoods1'));
        if($scope.arr.length>0){
            $scope.noEmpty=false;
        }else{
            $scope.noEmpty=true;
        }
        console.log($scope.arr);
//       console.log($scope.arr[0][0]);
		
		$scope.less = function(item){
			
			item.num--;
			if(item.num <=0)
			{	
				console.log(item);
				item.num =0;
				 $scope.arr.pop(item);
			}
		}
		$scope.add = function(item){
			item.num++;
		}
		$scope.delete = function (item){
			 $scope.arr.pop(item);
			console.log(item);
		}
//		$('.delete').on('click',function(){
//			console.log($(this));
//			console.log($(this).parent());
//			$(this).parent().parent().empty();
//		})
    }]);