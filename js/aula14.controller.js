app.controller('Aula14Controller', function ($scope, $http) {

    $scope.descricaoTempo = '';
    $scope.dados = [];
    $scope.url = "http://api.openweathermap.org/data/2.5/weather?q=";
    $scope.cidade = "São Paulo";
    $scope.icone = "";

    $scope.carregarDados = function () {
        $http
            .get('../js/dados/dados.json')
            .then(function (response) {
                console.log(response);
                $scope.dados = response.data;
            },
                function (error) {
                    alert('Não foi possível carregar os dados');
                });
    }

    $scope.carregaPrevisao = function () {
        $http
            .get($scope.url + $scope.cidade + "&appid=a1fc2c19d548237a56e0edd7b79b3ebc&units=metric&lang=pt")
            .then(function (response) {
                console.log(response);
                $scope.icone = response.data.weather[0].icon;
                $scope.descricaoTempo = response.data.weather[0].description;
                //$scope.dados = response.data;
            },
                function (error) {
                    alert('Não foi possível carregar os dados');
                });
    }
})

/*
        $http({
            method: 'GET',
            url:'../js/dados/dados.json'
        }).then(function(response){
            console.log(response);
            $scope.dados = response;
        }, function(error){
            alert('Não foi possível carregar os dados');
        });
})*/