// += , -= , *=, /= ,  ++ ou --

var x =1
var y =2

//soma
console.log(x=x+y)
console.log(x+=y) //mesma logica de codigo porem mais resumida
//subtração
console.log(x-=y) //mesma logica de codigo porem mais resumida
//multiplicação
console.log(x *= y) //mesma logica de codigo porem mais resumida
//divisão
console.log(x /= y) //mesma logica de codigo porem mais resumida

//loops
console.log(x++)
console.log(x--)

//loop por meio de multiplicação
while(x <= 100){
    console.log(x)

    x *= 2
}
console.log(x)

//decrementar 
var k = 7
while(x > 0){
    console.log(x)

    x -= k
}