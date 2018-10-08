app.controller('aula07Controller', function($scope){

    $scope.nomes = ['Eduardo', 'Daniel', 'Thiago', 'Jube', 'Allisson', 'Itallo', 'Jaison'];
    
    $scope.pessoas = [];

    $scope.pessoas
        .push(
            {nome: 'Eduardo', idade: 20, status: false},
            {nome: 'Daniel', idade: 20, status: false},
            {nome: 'Thiago', idade: 20, status: false},
            {nome: 'Paulo', idade: 20, status: false},
            {nome: 'Jubé', idade: 20, status: false},
            );

    console.log($scope.pessoas);

    $scope.adicionarPessoa = function(){
        var nome = document.getElementById('nomepessoa');
        var idade = document.getElementById('idadepessoa');

        $scope
        .pessoas
            .push(
                {nome: nome.value, idade: idade.value}
            );
        nome.value = '';
        idade.value = '';
    }
})