// ele vai retorna true, se as duas expressões forem verdadeiras, qualquer outro reultado ele retorna false.

var idade= 15
var nome = 'jão'

if(nome =='jão' && idade == 15){
    console.log('Pode participar do campeonato sub-15')
} else{
    console.log('Não pode participar do campeonato sub-15')
}

//todas as expressões verdadeiras é aprovado. pode isolar operações com () caso uma seja false não passa.

if((1==1 && 3 > 2) && false){
    console.log('aprovado');
}else if(nome == 'jão' && idade >=14){
    console.log('está apto a jogar');
}

