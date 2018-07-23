angular.module('app').service('PessoaService',function($http){
	var _self = this;		
	
	_self.getListPessoas = function(){
		return $http.get('/stefa/pessoa/list');
	};
		
	
});