/**
 * Created by YZTC on 2017/4/26.
 */
angular.module('typecoat1Module',[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('type.typecoat1',{
                url:'/typecoat1',
                templateUrl: 'components/type/typecoat1/typecoat1.html',
                controller:'typecoat1Ctrl',
                css:['components/type/typecoat1/typecoat1.css','components/type/type.css']
            })
    })
    .controller('typecoat1Ctrl',['$scope','$http',function ($scope,$http){
        $http.get('json/classify/typecoat/1.json').success(function (typecoatres) {
            $scope.typecoats1=typecoatres.data.list;
            $scope.typecoatcont=$scope.typecoats1;

            $scope.typecoats=function (k) {
                $scope.typecoatcont=k;
                $scope.istorf=true;
                $scope.isred=false;
                $scope.typehide=true;
            }
        });
        $http.get('json/classify/typecoat/2.json').success(function (typecoatres) {
            $scope.typecoats2=typecoatres.data.list;
            $scope.typecoatsclick=function (k) {
                $scope.typecoatcont=k;
                $scope.isred=true;
                $scope.istorf=false;
                $scope.typehide=true;

            }

        });
        $scope.typehide=true;
        $scope.typetoggle=function () {
            $scope.typehide=!$scope.typehide;
        }
        $http.get('components/type/typecoat1/json/1.json').success(function (typecoatres) {
                $scope.typecoats3=typecoatres.data.list;

            })
        $http.get('components/type/typecoat1/json/2.json').success(function (typecoatres) {
            $scope.typecoats4=typecoatres.data.list;

        })
        $http.get('components/type/typecoat1/json/3.json').success(function (typecoatres) {
            $scope.typecoats5=typecoatres.data.list;

        })


    }])

