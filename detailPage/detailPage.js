angular.module('detailModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('detail',{
                url: '/detail',
                templateUrl: 'detailPage/detailPage.html',
                controller:'detailCtrl',
                css:'detailPage/detailPage.css'
            })
    })
    .controller('detailCtrl',['$scope',function($scope){

    }]);