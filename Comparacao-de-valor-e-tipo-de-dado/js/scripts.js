var numero = 5
// === faz comparação de valor e tipo ---> exemplo 5 é igual a 5 seu tipo é number
if(numero === 5) {
    console.log('o numero é 5')

}

// tem quer ser ou tipo diferente ou valor difente para ser executado no !== ----> exemplo valor 4 , '5' valor igual porem tipo diferente. 

var num2 = '5';
var num3 = 4;
var ex04 = 'cinco';
if(num2 !== 5) {
    console.log('não é o número 5 do tipo number');
}

if(num3 !== 5){
    console.log('não é número 5 mas é tipo number');
}

if(ex04 !== 5){
    console.log('Não é o número 5 do tipo number, mais sim uma string' );
}