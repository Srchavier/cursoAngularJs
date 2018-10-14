var app = angular.module('app', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITULO: 'Hello',
    PARAGRAFO1: 'This is a paragraph.',
    BUTTON_OK: 'english',
    BUTTON_CANCEL: 'german',
    en_btn: 'english',
  });
  $translateProvider.translations('de', {
    TITLE: 'Hallo',
    FOO: 'Dies ist ein Paragraph.',
    BUTTON_LANG_EN: 'englisch',
    BUTTON_LANG_DE: 'deutsch'
  });
  $translateProvider.translations('pt-br', {
    TITULO: 'Seja bem vindo',
    PARAGRAFO1: 'Essa é uma pagina de inicio!',
    BUTTON_OK: 'Confirmar',
    BUTTON_CANCEL: 'Cancelar',
    pt_btn: "pt_br"
  });
  $translateProvider.preferredLanguage('pt-br');
});

app.controller('Aula20Controller', ['$scope', '$translate',
  function ($scope, $translate) {

    $scope.setaIdiona = function(sigla) {
      $translate.use(sigla);
    }
  }]);
