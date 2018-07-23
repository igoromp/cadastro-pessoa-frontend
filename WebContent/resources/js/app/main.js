angular.module("app",['ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider){
	 
	 $locationProvider.html5Mode(true);	 
	 
	 $urlRouterProvider.otherwise('/');
	 
	 $stateProvider
	    .state('home', {
	      url:'/',
	      templateUrl: 'pages/template.html',
	  })
	  .state('home.profissao',{
		  url:'profissao',
		  templateUrl:'pages/profissao.html',
		  controller:'ProfissaoCtrl'
	  })
	  .state('home.pessoas',{
		  url:'pessoas',
		  templateUrl:'pages/pessoas.html',
		  controller:'PessoasCtrl'
	  })
	  .state('home.cargos',{
		  url:'cargos',
		  templateUrl:'pages/cargo.html',
		  controller:'CargoCtrl'
	  })
	  .state('home.linguagens',{
		  url:'linguagens',
		  templateUrl:'pages/linguagem.html',
		  controller:'LinguagemCtrl'
	  });
});