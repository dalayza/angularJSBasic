app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.posicion = 2;

	$http.get('php/servicios/alumnos.listado.php')
		.success(function(data) {
			$scope.alumnos = data;
	});

	$scope.siguientes = function() {
		if ($scope.alumnos.length > $scope.posicion) {
			$scope.posicion += 2;
		}
	}

	$scope.anteriores = function() {
		if ($scope.alumnos.length > 2) {
			$scope.posicion -= 2;
		}
	}

}]);