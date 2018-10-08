app.controller('aula09Controller', ['$scope', 'aula09Service', 'Pessoa',
    function ($scope, aula09Service, Pessoa) {

        $scope.pessoa = new Pessoa();
    
        console.log(aula09Service.somar(10, 10));
    }]);

app.controller('aula09Controller2', ['$scope', 'aula09Service', function ($scope, aula09Service) {

    console.log(aula09Service.subtrair(20, 10));
}])