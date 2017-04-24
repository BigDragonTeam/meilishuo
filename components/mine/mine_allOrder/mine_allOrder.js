angular.module('mine_allModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('mine.mine_allOrder',{
                url: '/mine_allOrder',
                templateUrl: 'components/mine/mine_allOrder/mine_allOrder.html',
                controller:'mine_orderCtrl',
                css:['components/mine/mine.css','components/mine/mine_allOrder/mine_allOrder.css']
            })
    })
    .controller('mine_orderCtrl',['$scope',function($scope){

    }]);