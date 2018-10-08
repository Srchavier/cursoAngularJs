app.controller('aula06Controller', function($scope){

    $scope.nome = 'Curso Angular DevMedia';

    $scope.olaMundo = function(nome){
        alert('Olá ' + nome +';' );
    }
});