angular.module('mls',["ui.router",'angularCSS','homeModule','typeModule','cartModule','mineModule'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    });
document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5+ 'px';
window.addEventListener('resize',function(){
    document.documentElement.style.fontSize = innerWidth/7.5+'px';
});