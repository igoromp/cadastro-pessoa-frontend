angular.module('app').controller('CargoCtrl',function($scope,CargoService){
	
	$scope.cargos ={};
	var service = CargoService;
	
	$scope.getCargos = function(){
		service.getListCargos().then(function(list){
			$scope.cargos = list.data;
			//console.log($scope.cargos);
		});
	};
	
	$scope.getCargos();
});