for(var i = 10; i > 0; i--){

console.log(i)

if(i===5){
    break
}

}

console.log('Deu o break')
// para a excução e pula para a proximo codigo da sequência saindo do loop


var x =10
while(x < 100){
    x += 10
    if(x === 60){
        console.log('continue, pulo o 60')
        continue
    }

    console.log('testando continue' + x)
}

// pular o valor e da continuidade no loop
var x =20
while(x < 200){
    x += 20
    if(x === 120 || x ===180 ){
        console.log('continue,pulou o valor')
        continue
    }

    console.log('testando continue' + x)
}
//pode utilizar com outras logicas por exemplo OR se nao quere imprimir os dois valores na tela
