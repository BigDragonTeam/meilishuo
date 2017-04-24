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
    .controller('type3Ctrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('json/classify/typebag/1.json').success(function (dressres) {
            $scope.typebag_1=dressres.data.list;
            $scope.typebag=$scope.typebag_1;
            $scope.typebagpop=function (i) {
                $scope.typebag=i
            }

        });
        $http.get('json/classify/typebag/2.json').success(function (dressres) {
            $scope.typebag_2=dressres.data.list;
            $scope.typebaghot=function (i) {
                $scope.typebag=i
            }
        });
        $http.get('json/classify/typebag/3.json').success(function (dressres) {
            $scope.typebag_3 = dressres.data.list;
            $scope.typebagnew = function (i) {
                $scope.typebag = i;

            }
        });


    }])