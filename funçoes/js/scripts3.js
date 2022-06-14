let x = 5; // é igual var x = 5  
x = 12 ;// mudou valor de x
console.log(x);
//const cria uma constante 
const y = 11 

// não pode mudar o valor por exemplo para ---> y= 13 

//local não mistura com a global ou com outros escopos.
if (true){
    let x = 40
    console.log(x)

    const y = 80
    console.log(y)
}

console.log(x)

if( 30 > 20){
    const y = 200

    console.log( 'const if 3' + y)
}

for (let x = 0; x <10 ; x++) {
    console.log(x)
}
