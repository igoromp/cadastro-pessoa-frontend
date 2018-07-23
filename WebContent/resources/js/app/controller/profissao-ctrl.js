angular.module('app').controller('ProfissaoCtrl',function($scope,ProfissaoService){
	
	$scope.profissionais ={};
	var service = ProfissaoService;
	
	$scope.getProfissoes = function(){
		service.getListProfissoes().then(function(list){
			$scope.profissionais = list.data;
			//console.log($scope.profissionais);
		});
	};
	
	$scope.getProfissoes();
});