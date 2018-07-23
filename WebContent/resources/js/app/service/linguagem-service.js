angular.module('app').service('LinguagemService',function($http){
	var _self = this;
		
	
	_self.getListLinguagens = function(){
		return $http.get('/stefa/linguagem/list');
	};
		
	
});