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
    }]);