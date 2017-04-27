angular.module('detailModule',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('detail',{
                url: '/detail',
                templateUrl: 'detailPage/detailPage.html',
                controller:'detailCtrl',
                css:'detailPage/detailPage.css'
            })
    })

    .controller('detailCtrl',['$scope','factory_getValue',function($scope,factory_getValue){
        $scope.detailimg= factory_getValue.getter(0);
        $scope.detailtitle= factory_getValue.getter(1);
        $scope.detailprice= factory_getValue.getter(2);
        $scope.detailsale= factory_getValue.getter(3);
        $scope.detailcfav= factory_getValue.getter(4);
        $('.tab').empty();

        $scope.addToCar = function(a,b,c) {
            var obj1=[a,b,c];
            var local = localStorage.getItem('carGoods1');
            if(local) {
                var carArr1 = JSON.parse(local);
                var isHas = false;
                for(var i = 0; i < carArr1.length; i++) {
                    if(carArr1[i].title == obj1.title) {
                        carArr1[i].num++;
                        isHas = true;
                    }
                }
                if(!isHas) {
                    obj1.num = 1;
                    carArr1.push(obj1)
                }
                localStorage.setItem('carGoods1', JSON.stringify(carArr1));
            } else {
                obj1.num = 1;
                var carArr = [obj1];
                localStorage.setItem('carGoods1', JSON.stringify(carArr));
            }
        }
    }]);