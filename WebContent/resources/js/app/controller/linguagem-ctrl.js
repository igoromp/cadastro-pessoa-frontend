angular.module('app').controller('LinguagemCtrl',function($scope,LinguagemService){
	
	$scope.linguagens = {};
	var service = LinguagemService;
	
	$scope.getLinguagens = function(){
		service.getListLinguagens().then(function(list){
			$scope.linguagens = list.data;
			//console.log($scope.linguagens);
		});
	};
	
	
	$scope.getLinguagens();
});