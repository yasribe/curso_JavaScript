//EXEMPLOS

var a = 5 + 3
var b = a % 5
var c = 5 * b ** 2
var d = 10 - a /2
var e = 6*2 / d // nesses casos calcula o que aparece primeiro
var f = b % e + 4 / e 

//AUTO-ATRIBUIÇÃO

var n = 3 
n = n + 4
n = n - 5
n = n * 4  
n = n / 2
n = n **2
n = n % 5

//SIMPLIFICANDO AUTO-ATRIBUIÇÃO

var n = 3 
n = n + 4  n+=4
// só é valido se receber a mesma variavel

n = n - 5  n-=5
n = n * 4  n*=4
n = n / 2  n/=2
n = n **2  n**=2
n = n % 5  n%=5

//incremento pós
var x = 5 
x = x + 1  x++
x = x + 1 x --
//incremento pré
var x = 5 
x = x + 1  ++x
x = x + 1  --x 