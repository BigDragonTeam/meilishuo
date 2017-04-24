angular.module('type1Module',[])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('type.type1',{
            url:'/type1',
            templateUrl: 'components/type/type1/type1.html',
            controller:'type1Ctrl',
            css:['components/type/type1/type1.css','components/type/type.css']
            })
})
    .controller('type1Ctrl',['$scope',function($scope){

    }])