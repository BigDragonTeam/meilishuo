angular.module('mls',["ui.router",'angularCSS','homeModule','typeModule','cartModule','mineModule'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    });