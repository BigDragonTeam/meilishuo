angular.module('mls',["ui.router",'angularCSS','homeModule','typeModule','cartModule','mineModule'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    })
    .controller("tabCtrl",["$scope",function($scope){
        $scope.changeColor=function () {

                $scope.isClassName=!$scope.isClassName;
                alert(123123);

            // if(btnName=="type"){
            //     $scope.btnName=true
            // }
            // if(btnName=="cart"){
            //     $scope.btnName=true
            // }
            // if(btnName=="mine"){
            //     $scope.btnName=true
            // }
        }
    }]);







document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5+ 'px';
window.addEventListener('resize',function(){
    document.documentElement.style.fontSize = innerWidth/7.5+'px';
});
