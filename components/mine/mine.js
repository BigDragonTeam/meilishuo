angular.module('mineModule',['mine_allModule','mine_gettingModule','mine_payingModule','mine_aveModule'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('mine',{
                url: '/mine',
                templateUrl: 'components/mine/mine.html',
                controller:'mineCtrl',
                css:'components/mine/mine.css'
            })
    })
    .controller('mineCtrl',['$scope',function($scope){
        $scope.changeColor11=function () {
            $scope.isClassName11=true;
            $scope.isClassName22=false;
            $scope.isClassName33=false;
            $scope.isClassName44=false;
        };
        $scope.changeColor22=function () {
            $scope.isClassName11=false;
            $scope.isClassName22=true;
            $scope.isClassName33=false;
            $scope.isClassName44=false;
        };
        $scope.changeColor33=function () {
            $scope.isClassName11=false;
            $scope.isClassName22=false;
            $scope.isClassName33=true;
            $scope.isClassName44=false;
        };
        $scope.changeColor44=function () {
            $scope.isClassName11=false;
            $scope.isClassName22=false;
            $scope.isClassName33=false;
            $scope.isClassName44=true;
        };
        $scope.changeColor11();
}]);