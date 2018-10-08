angular.module('app', ['ngRoute'])
    .controller('Aula11Controller',
        function ($scope, $route, $routeParams, $location) {

            $scope.route = $route;
            $scope.location = $location;
            $scope.routeParams = $routeParams;
        })

    .controller('InicialController', function ($scope) {
        console.log('Entrou no controller inicial!');
    })

    .controller('Pagina1Controller', function ($scope) {
        console.log('Entrou no controller página 1!');
    })

    .controller('Pagina2Controller', function ($scope, $routeParams) {
        $scope.parametros = $routeParams;
        console.log('Entrou no controller página 2!');
        console.log('Id do produto :' + $scope.parametros.idproduto);
    })
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'html/aula11_inicial.html',
                controller: 'InicialController'
            })
            .when('/Pagina1', {
                templateUrl: 'html/aula11_pagina1.html',
                controller: 'Pagina1Controller'
            })
            .when('/Pagina2/:idproduto', {
                templateUrl: 'html/aula11_pagina2.html',
                controller: 'Pagina2Controller'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });

    });