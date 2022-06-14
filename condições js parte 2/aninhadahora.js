var hora = new Date() //sempre vai ser date
var agora = hora.getHours() //horas
var min = hora.getMinutes() //minutos
console.log(`Agora são ${agora}h:${min}min`)

//condição aninhada, varios blocos ... 
if(agora < 6){
    console.log(`Boa Madrugada`)
} else if (agora <=12){
    console.log(`Bom dia!`)
}else if(agora <= 18) {
    console.log(`Boa tarde!`)
}else{
    console.log(`Boa noite`)
}