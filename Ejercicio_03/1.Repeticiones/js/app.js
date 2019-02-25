(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
        $scope.listado = ["Denis Alayza", "Desiree Borges", "Luis Borges", "Victoria Poleo", "Dylan Alayza"];
        
        $scope.listadoProfesores = {
            profesores: [{
                nombre: "Denis Alayza",
                edad: 39,
                clase: "PEE"
            },{
                nombre: "Desiree Borges",
                edad: 30,
                clase: "MD"
            },{
                nombre: "Luis Borges",
                edad: 63,
                clase: "Adm"
            }]
        }

}]);





})();
