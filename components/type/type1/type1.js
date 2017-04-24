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
    .controller('type1Ctrl',['$scope','$http',function($scope,$http){
        $http.get('json/classify/typedress/1.json').success(function (dressres) {
            $scope.typedress_1=dressres.data.list;
            console.log($scope.typedress_1);
            $scope.typedress=$scope.typedress_1;
                 $scope.typepop=function (k) {
                     $scope.typedress=k;

                 }
        });
        $http.get('json/classify/typedress/2.json').success(function (dressres) {
            $scope.typedress_2=dressres.data.list;
            $scope.typehot=function (k) {
                $scope.typedress=k;

            }});
        $http.get('json/classify/typedress/3.json').success(function (dressres) {
            $scope.typedress_3=dressres.data.list;
            $scope.typenew=function (k) {
                $scope.typedress=k;

            }});





    }])