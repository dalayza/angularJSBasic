app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

    $scope.setActive("mAlumnos");
    

    var codigoId = $scope.codigo = $routeParams.codigo;
    $scope.alumno = {};
    $scope.actualizado = false;
    $scope.creando = false;


    if (codigoId == "nuevo"){
        $scope.creando = true;
    } else {
        $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigoId)
            .success(function(data) {
                if (data.err !== undefined) {
                    window.location = "#/alumnos";
                    return;
                }
                $scope.alumno = data;
        });
    };


    $scope.guardarAlumno = function() {
        if ($scope.creando) {
            $http.post('php/servicios/alumnos.crear.php', $scope.alumno)
            .success(function(data) {
                if (data.err === false) {
                    $scope.actualizado = true;
                    setTimeout(function() {
                        $scope.actualizado = false;
                        $scope.$apply();
                    }, 3500)
                }
            })
        } else {
            $http.post('php/servicios/alumnos.guardar.php', $scope.alumno)
            .success(function(data) {
                if (data.err === false) {
                    $scope.actualizado = true;
                    setTimeout(function() {
                        $scope.actualizado = false;
                        $scope.$apply();
                    }, 3500)
                }
            })
        }

    }
}]);