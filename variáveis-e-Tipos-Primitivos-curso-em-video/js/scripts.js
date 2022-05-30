//  sinal de = sempre vai ser RECEBE


var nome = window.prompt('qual é o seu nome?')

alert('É um grande prazer em te conhecer, ' + nome)

//coverter para inteiro PARSEINT(n)
//coverter para real PARSEFLOAT(n)

var n1 = parseFloat(prompt('Digite um numero:')) //prompt retorna uma string
var n2 = parseFloat( prompt('Digite outro número:')) //1 jeito de fazer já convertendo direto
var s = n1 + n2


alert('A soma dos numeros ' + s )



//com Number(n) ele indentifica por conta propria se é inteiro ou real

var m1 = Number(prompt('Digite um numero:')) //prompt retorna uma string
var m2 = Number( prompt('Digite outro número:')) //1 jeito de fazer já convertendo direto
var soma = m1 + m2


alert('A soma dos numeros ' + soma ) 

//PARA CONVERTE PARA STRING
//string(n) ou n.string()

// outra forma de concatenação com placeholder ${}

var nome = 'gus'
var idade = 23
var nota = 9.6

alert(`O aluno ${nome} tem ${idade} anos e tirou nota ${nota} !`)

var j = 'JavaScript'
j.length // quantos caracteres a string tem
j.toUpperCase // tudo para MAIÚSCULAS
j.toLowerCase // tudo para minúsculas