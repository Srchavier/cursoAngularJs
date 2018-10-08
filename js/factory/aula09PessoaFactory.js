app.factory('Pessoa', function () {

    console.log('Criou o objeto Pessoa');

    var Pessoa = function () {
        console.log('Instanciou o objeto Pessoa');

        this.nome = 'Eduardo';
        this.idade = 21;

        this.cumprimentar = function () {
            console.log('cumprimentar');
            return 'Olá ' + this.nome + ';';
        }
    }

    return Pessoa;
});