var obj = {
nome: 'mat' , 
idade: 25,
profissao: 'programador',
estouTrabalhando: true
}

console.log(obj)
console.log(typeof obj)
//para uma var especifica tem que adicionar .

console.log(obj.profissao)
console.log(obj.nome)
console.log(obj.idade)

console.log('O meu nome é ' + obj.nome)

//pode mudar a propriedade de um objeto
obj.nome = 'luan'

console.log(obj.nome)
console.log(obj)

// pode criar também uma propriedade

obj.graduacao = true
console.log(obj)