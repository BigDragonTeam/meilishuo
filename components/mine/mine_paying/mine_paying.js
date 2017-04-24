angular.module('mine_payingModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('mine.mine_paying',{
                url: '/mine_paying',
                templateUrl: 'components/mine/mine_paying/mine_paying.html',
                controller:'mine_payingCtrl',
                css:['components/mine/mine.css','components/mine/mine_paying/mine_paying.css']
            })
    })
    .controller('mine_payingCtrl',['$scope',function($scope){

    }]);
