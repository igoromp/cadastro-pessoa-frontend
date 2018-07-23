angular.module('app').service('ProfissaoService',function($http){
	var _self = this;
		
	
	_self.getListProfissoes = function(){
		return $http.get('/stefa/profissao/list');
	};
		
	
});