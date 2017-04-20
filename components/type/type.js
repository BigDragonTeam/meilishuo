angular.module('typeModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('type',{
                url: '/type',
                templateUrl: 'components/type/type.html',
                controller:'typeCtrl',
                css:'components/type/type.css'
            })
    })
    .controller('typeCtrl',['$scope',function($scope){
    }]);