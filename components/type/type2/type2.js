angular.module('type2Module', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('type.type2', {
                url: '/type2',
                templateUrl: 'components/type/type2/type2.html',
                controller: 'type2Ctrl',
                css: ['components/type/type2/type2.css', 'components/type/type.css']
            })
    })
    .controller('type2Ctrl', ['$scope', '$http', function ($scope, $http) {
        $scope.istorf=true;
        $http.get('json/classify/typepants/1.json').success(function (dressres) {
            $scope.typepants_1 = dressres.data.list;
            $scope.typepants = $scope.typepants_1;
            $scope.typepantspop = function (k) {
                $scope.typepants = k;
                $scope.istorf=true;
                $scope.isred=false;
                $scope.isblue=false;

            }
        });
        $http.get('json/classify/typepants/2.json').success(function (dressres) {
            $scope.typepants_2 = dressres.data.list;
            $scope.typepantshot = function (k) {
                $scope.typepants = k;
                $scope.istorf=false;
                $scope.isred=true;
                $scope.isblue=false;

            }
        });
        $http.get('json/classify/typepants/3.json').success(function (dressres) {
            $scope.typepants_3 = dressres.data.list;
            $scope.typepantsnew = function (k) {
                $scope.typepants = k;
                $scope.istorf=false;
                $scope.isred=false;
                $scope.isblue=true;

            }
        });


    }])