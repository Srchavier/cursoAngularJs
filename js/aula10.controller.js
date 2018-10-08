function Aula10Controller($scope, $filter) {
    console.log('iniciou o controller');

    //console.log(retornaOiFilter('Eduardo'));

    console.log($filter('retornaOi')('Eduardo'));

    $scope.pessoa = {
        nome: 'DevMedia',
        idade: 25
    }
}

app.controller('Aula10Controller', Aula10Controller);