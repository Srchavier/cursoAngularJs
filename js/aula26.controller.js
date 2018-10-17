var app = angular.module('app', ['ui.bootstrap']);

app.controller('Aula26Controller', function ($scope) {

    $scope.grupos = [
        { heading: "Conteudo dinânico", content: "Conteudo do grupo dinânico" },
        { heading: "Conteudo dinânico", content: "Conteudo do grupo dinânico" },
        { heading: "Conteudo dinânico", content: "Conteudo do grupo dinânico" },
        { heading: "Conteudo dinânico", content: "Conteudo do grupo dinânico" },
        { heading: "Conteudo dinânico", content: "Conteudo do grupo dinânico" },
        { heading: "Conteudo dinânico", content: "Conteudo do grupo dinânico" }

    ]

    $scope.accor = { heading: '', content: '' };

    $scope.addAccordion = function () {
        $scope.grupos.push($scope.accor);
        $scope.accor = { heading: '', content: '' };
    }

    $scope.status = {
        isCustomHeaderOpen: true,
        isFirstOpen: true,
        isFirstDisabled: false
    };

});
