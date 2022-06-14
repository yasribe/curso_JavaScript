// tudo que esta fora de uma função é escopo Global

var x = 2
var y = 5

console.log(x, y)

// tudo que esta dentro é local, e não se mistura com outros escopos

function teste (){
    var z = 0
    console.log(z)
    console.log(x)
}

// invocar a função 

teste ()

function testando (){
    var z = 7
    console.log(z)
}

testando();

//if, for , while se mistrura com o global.
if(true) {
    var p = 78
}
console.log(p);