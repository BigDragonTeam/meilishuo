angular.module('type3Module',[])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('type.type3',{
            url:'/type3',
            templateUrl: 'components/type/type3/type3.html',
            controller:'type3Ctrl',
            css:['components/type/type3/type3.css','components/type/type.css']
            })
})
    .controller('type3Ctrl',['$scope',function($scope){

    }])