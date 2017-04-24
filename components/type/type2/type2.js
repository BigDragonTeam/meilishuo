angular.module('type2Module',[])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('type.type2',{
            url:'/type2',
            templateUrl: 'components/type/type2/type2.html',
            controller:'type2Ctrl',
            css:['components/type/type2/type2.css','components/type/type.css']
            })
})
    .controller('type2Ctrl',['$scope',function($scope){

    }])