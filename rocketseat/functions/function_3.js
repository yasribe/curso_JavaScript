//fuction hoisting

saymyname()

function saymyname(){
    console.log('algo')
}
//dessa forma sofre o hoisting

const saymyname = function(){ 
    console.log('legal')
}
// dessa forma não ocorre o hoisting e a função da erro, pois foi declarado palavra chave(variável)
