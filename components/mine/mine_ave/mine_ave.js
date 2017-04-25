
angular.module('mine_aveModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('mine.mine_ave',{
                url: '/mine_ave',
                templateUrl: 'components/mine/mine_ave/mine_ave.html',
                controller:'mine_aveCtrl',
                css:['components/mine/mine.css','components/mine/mine_ave/mine_ave.css']
            })
    })
    .controller('mine_aveCtrl',['$scope',function($scope){

    }]);
