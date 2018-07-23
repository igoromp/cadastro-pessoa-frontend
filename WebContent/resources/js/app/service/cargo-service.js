angular.module('app').service('CargoService',function($http){
	var _self = this;
	
	_self.getListCargos = function(){
		return $http.get('/stefa/cargo/list');
	};
		
	
});