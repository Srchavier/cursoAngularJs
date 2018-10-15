var app = angular.module('app', ['ui.unique','ui.validate']);



app.controller('Aula23Controller', ['$scope',
    function ($scope) {

        $scope.usuarios = [
            {nome:'Eduardo', email: 'seila@gmail.com.br'},
            {nome:'Eduardo', email: 'seila@gmail.com.br'},
            {nome:'hotmail', email: 'hotmail@gmail.com.br'},
            {nome:'Eduardo', email: 'seila@gmail.com.br'},
            {nome:'teste', email: 'teste@gmail.com.br'},
            {nome:'Eduardo', email: 'seila@gmail.com.br'},
            {nome:'Eduardo', email: 'sa@gmail.com.br'},
            {nome:'seila', email: 'seila2@gmail.com.br'},
        ];

        $scope.validar = function(valor) {
            return valor === $scope.senha1;
        }

    }]);


