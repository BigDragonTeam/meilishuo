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

    .controller('detailCtrl',['$scope','factory_getValue',function($scope,factory_getValue){
        $scope.detailimg= factory_getValue.getter(0);
        $scope.detailtitle= factory_getValue.getter(1);
        $scope.detailprice= factory_getValue.getter(2);
        $scope.detailsale= factory_getValue.getter(3);
        $scope.detailcfav= factory_getValue.getter(4);
		$('.tab').empty();
        $scope.addToCar=function () {
            
        }
    }]);