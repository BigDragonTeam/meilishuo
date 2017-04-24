angular.module('typeModule',['type1Module','type2Module','type3Module'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('type',{
                url: '/type',
                templateUrl: 'components/type/type.html',
                controller:'typeCtrl',
                css:'components/type/type.css'
            })
    })
    .controller('typeCtrl',['$scope','$http',function($scope,$http){
        $http.get('json/classify/1.json').success(function (res) {
            var resdata=res.data;
            for (var i in resdata){
                console.log(resdata[i])
                if (resdata[i].list.length>10){
                    $scope.type_arr1=resdata[i].list;
                }
            }
        })
        $http.get('json/classify/2.json').success(function (res1) {
            $scope.type_arr2=res1.data;

        })

    }]);