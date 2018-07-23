angular.module('app').controller('PessoasCtrl',function($scope,PessoaService){
	
	$scope.list ={};
	var service = PessoaService;
	
	$scope.getPessoas = function(){
		service.getListPessoas().then(function(list){
			$scope.list = list.data;
			//console.log($scope.list);
		});
	};
	
	$scope.getPessoas();
});