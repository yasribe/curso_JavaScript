//selação por marca

var p1 = document.getElementsByTagName('p')[1]
document.write('está escrito assim ' + p1.innerText) // pega o texto e escreve na tela
document.write('está escrito assim ' + p1.innerHTML) // pega o texto e escreve na tela formatado do jeito que está

// por ID 
var c = document.getElementById('msg')
d.style.background = 'red'
d.innerText = 'mudei o texto' 

// por Name
var d = document.getElementsByName('msg')[0]

// POR CLASS

var a = document.getElementsByClassName('msg')

//POR SELETOR
var f = document.querySelector('div#msg') //por div
var g = document.querySelector('class.msg') // por class
