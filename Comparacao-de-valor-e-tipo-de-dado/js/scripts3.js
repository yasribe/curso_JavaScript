//MUDA O VALOR que a expressão retornou, se TRUE vira false, se FALSE vira true.

if(!true){
    //vira false, não vai entra 
    console.log('Passou')

}
if(!false){
    //vira true,vai entra 
    console.log('Passou')

}
//não vai passar pois nome está certo
var nome = 'mat'
if(!(nome== 'mat')){
    console.log(' OK!')
}

if(!(nome== 'pedro')){
    console.log('vai passar pois nome está errado, porem usando o operador logico vira verdadeiro')
}