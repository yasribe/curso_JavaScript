//function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2){
    //console.log(number1 + number2)
    // total = number1 + number2 ideal atribuir a palavra chave let, const  igual abaixo
    let total = number1 + number2
    return  total  // retorno
}
//sum (2,3) // arguments - argumentos 

let number1 = 55
let number2 = 15

//console.log(`O valor do número 1: ${number1}`)
//console.log(`O valor do número 2: ${number2}`)
console.log(`A soma dos número ${sum(number1,number2)}`)
//console.log(total)  sem palavra chave de variavel pode ser chamada em qualquer momento do codigo podendo da problemas

// função liquidificador

function fazerSuco ( fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = fazerSuco ('pêra','mamão')
console.log(copo)