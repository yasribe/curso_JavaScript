var lista = ['batata','cabola', 'cenoura','limão','Alho']

//criar um elemento
var listaUl= document.createElement('ul')

var body = document.getElementsByTagName('body')

console.log(body[0])

// adiciona um filho
body[0].appendChild(listaUl)

var listnoBody = document.getElementsByTagName('ul')

console.log(listnoBody[0])

for (var l = 0; l < lista.length; l++){
    var lifor = document.createElement('li')
    var textoLi = document.createTextNode(lista[l])
    lifor.appendChild(textoLi)
    listnoBody[0].appendChild(lifor)
}