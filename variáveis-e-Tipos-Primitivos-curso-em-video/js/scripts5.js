
//mousemove
//mousedown
//mouseup
//direto no JS
var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)


//click
function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
//mouseenter
function entrar(){
    a.innerText = 'Entrou!'
}
//mouseout

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'yellow'
}