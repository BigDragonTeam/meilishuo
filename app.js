angular.module('mls',["ui.router",'angularCSS','homeModule','typeModule','cartModule','mineModule'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    })
    .controller("tabCtrl",["$scope",function($scope){

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







document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5+ 'px';
window.addEventListener('resize',function(){
    document.documentElement.style.fontSize = innerWidth/7.5+'px';
});
