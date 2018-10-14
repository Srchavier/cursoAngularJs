var app = angular.module('app', ['ngCookies']);

app.controller('Aula19Controller', ['$scope', '$cookies',
    function ($scope, $cookies) {
        $scope.criarCookie = function () {
            $cookies.put('meusDados',
                "eduardo"
            );
        }
        $scope.getValorCookie = function () {
            console.log($cookies.get('meusDados'));
        }

        $scope.removeCookie = function () {
            $cookies.remove('meusDados');
        }

    }]

);

app.controller('Aula19_2Controller', function ($scope, $cookies) {
    $scope.getValorCookieCtr2 = function () {
        console.log(JSON.stringify($cookies.get('meusDados')));
    }
})