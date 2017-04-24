angular.module('mine_gettingModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('mine.mine_getting',{
                url: '/mine_getting',
                templateUrl: 'components/mine/mine_getting/mine_getting.html',
                controller:'mine_gettingCtrl',
                css:['components/mine/mine.css','components/mine/mine_getting/mine_getting.css']
            })
    })
    .controller('mine_gettingCtrl',['$scope',function($scope){

    }]);
