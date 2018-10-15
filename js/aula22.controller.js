var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);



app.controller('Aula22Controller', ['$scope',
  function ($scope) {

      $scope.texto ='Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descriçãoEssa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição Essa e uma breve descriçãoEssa e uma breve descrição Essa e uma breve descrição Essa e uma breve descrição ';
      $scope.mskCpf = '999.999.999-99';
      $scope.mskTelefone = '(99) 9999-9999'
  }]);


