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
    }]);