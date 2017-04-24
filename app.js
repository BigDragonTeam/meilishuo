var app = angular.module('mls',["ui.router","me-lazyload",'angularCSS','homeModule','typeModule','cartModule','mineModule','homeSub1Module','homeSub2Module','homeSub3Module'])
    app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    })
    .controller("tabCtrl",["$rootScope",function($rootScope){

        $rootScope.changeColor1=function () {
            $rootScope.isClassName1=true;
            $rootScope.isClassName2=false;
            $rootScope.isClassName3=false;
            $rootScope.isClassName4=false;
        };
        $rootScope.changeColor2=function () {
            $rootScope.isClassName1=false;
            $rootScope.isClassName2=true;
            $rootScope.isClassName3=false;
            $rootScope.isClassName4=false;
        };
        $rootScope.changeColor3=function () {
            $rootScope.isClassName1=false;
            $rootScope.isClassName2=false;
            $rootScope.isClassName3=true;
            $rootScope.isClassName4=false;
        };
        $rootScope.changeColor4=function () {
            $rootScope.isClassName1=false;
            $rootScope.isClassName2=false;
            $rootScope.isClassName3=false;
            $rootScope.isClassName4=true;
        };
        $rootScope.changeColor1();
    }]);
	 






document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5+ 'px';
window.addEventListener('resize',function(){
    document.documentElement.style.fontSize = innerWidth/7.5+'px';
});
