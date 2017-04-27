/**
 * Created by YZTC on 2017/4/26.
 */
angular.module('typecoat2Module',[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('type.typecoat2',{
                url:'/typecoat2',
                templateUrl: 'components/type/typecoat2/typecoat2.html',
                controller:'typecoat2Ctrl',
                css:['components/type/typecoat2/typecoat2.css','components/type/type.css']
            })
    })
    .controller('typecoat2Ctrl',['$scope','$http',function ($scope,$http){
        $http.get('json/classify/typecoat/3.json').success(function (typetrousersres) {
            $scope.typetrouser1=typetrousersres.data.list;
            $scope.typetrouserscont=$scope.typetrouser1;

            $scope.typetrousersclick=function (m) {
                $scope.typetrouserscont=m;
                $scope.istorf=true;
                $scope.isred=false;
                $scope.typehide1=true;

            }

        });
        $http.get('json/classify/typecoat/4.json').success(function (typetrousersres) {

            $scope.typetrouser2=typetrousersres.data.list;
            $scope.typetrousersclick1=function (m) {
                $scope.typetrouserscont=m;
                $scope.isred=true;
                $scope.istorf=false
                $scope.typehide1=true;
            }
            

        })
        $scope.typehide1=true;
        $scope.typetoggle1=function () {
            $scope.typehide1=!$scope.typehide1;
        }
        $http.get('components/type/typecoat2/json/1.json').success(function (typetrousersres) {
            $scope.typetrouser3=typetrousersres.data.list;

        })
        $http.get('components/type/typecoat2/json/2.json').success(function (typetrousersres) {
            $scope.typetrouser4=typetrousersres.data.list;

        })
        $http.get('components/type/typecoat2/json/3.json').success(function (typetrousersres) {
            $scope.typetrouser5=typetrousersres.data.list;

        })
    }])