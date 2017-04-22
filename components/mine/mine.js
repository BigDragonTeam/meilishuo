angular.module('mineModule',[])
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
        $scope.changeColor1=function () {
            $scope.isClassName1=true;
            $scope.isClassName2=false;
            $scope.isClassName3=false;
            $scope.isClassName4=false;
        };
        $scope.changeColor2=function () {
            $scope.isClassName1=false;
            $scope.isClassName2=true;
            $scope.isClassName3=false;
            $scope.isClassName4=false;
        };
        $scope.changeColor3=function () {
            $scope.isClassName1=false;
            $scope.isClassName2=false;
            $scope.isClassName3=true;
            $scope.isClassName4=false;
        };
        $scope.changeColor4=function () {
            $scope.isClassName1=false;
            $scope.isClassName2=false;
            $scope.isClassName3=false;
            $scope.isClassName4=true;
        };
        $scope.changeColor1();
}]);