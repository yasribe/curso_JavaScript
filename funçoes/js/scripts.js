//PRECISAR SER INVOCADA PARA SER EXECUTADA

function primeiraFuncao(){

    console.log('testando function')
}

primeiraFuncao() // invocando com essa sintaxe

//ARGUMENTO

function dizerNome(nome){
console.log(`O nome é: ${nome}`)

}

dizerNome('Marcos')
dizerNome('Ana')
dizerNome('Pedro')

var nomeBancodeDados = prompt('Digite seu nome')

dizerNome(nomeBancodeDados)

//RETURN

function soma(a ,b){
    var soma = a + b 
    return soma
}

var somaUm = soma (2,5)
console.log(somaUm)
var somaDois = soma (8, 12)
console.log(somaDois)

//NÃO PRECISAR CRIAR UMA VARIAVEL
console.log(soma (2,4))
