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
    .controller('typeCtrl',['$scope','$http',function($scope,$http){
        $http.get('json/classify/1.json').success(function (res) {
            var resdata=res.data;
            console.log(res.data)
            for (var i in resdata){
                if (resdata[i].list.length>10){
                    $scope.type_arr1=resdata[i].list;
                }



            }
        })
    }]);