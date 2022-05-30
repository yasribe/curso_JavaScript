// ele retorna true caso uma das operações seja verdadeira e retorna false se as duas forem falsas.

var idade = 16
var nome= 'mat'

//uma operação ou outra precisar ser verdadeira para se encaixar na FUNÇÃO
if(nome== 'mat' || idade > 14){
    console.log('Pode participar do campeonato')
}


if(nome== 'mat' || idade > 17){
    console.log('Pode participar pq o nome é o mesmo')
}
if(nome== 'leal' || idade > 13){
    console.log('Pode participar pq o nome é o mesmo')
}


if(nome== 'leal' || idade > 17){
    console.log('Pode participar pq o nome é o mesmo')
}else{
    console.log('Não pode participar dados são diferentes')
}

// AND vai ser true OR vai ser True
if(nome== 'mat' && 10 > 5 || idade > 13){
    console.log('as duas são verdadeiras')
}
// AND vai ser false OR vai ser True  
if(nome== 'leal' && 10 > 5 || idade > 13){
    console.log('uma é false outra true, mas usando OR só uma precisa ser verdadeira')
}
// mudando o AND de lugar vai exigir que as duas seja True 
//isolando vai ser false e true não vai entra  
if((nome== 'leal' || 10 > 15) && idade > 13){
    console.log('não entra pois o AND exige que os dois seja true')
}else{
    console.log('não entrou')
}

//JÁ isolando dessa maneira vai ser true pois primeiro e resolvido a parte isolada e false 
if(nome== 'leal' || (10 > 5 && idade > 13)){
    console.log('vai entra pois para o OR só uma precisa ser verdadeira')
}else{
    console.log('não entrou')
}
//JÁ isolando dessa maneira vai ser true pois primeiro e resolvido a parte isolada e false 
if(nome== 'leal' && (10 > 5 || idade > 13)){
    console.log('não vai entra pois para o and ambas precisa ser verdadeira')
}else{
    console.log('não entrou')
}



