
function calcular(){

    var txtv = document.querySelector('input#txtvel')
    var resul = document.querySelector('div#resul')
    var vel = Number(txtv.value)
    resul.innerHTML = `<p>Sua velocidade é de <strong> ${vel} km/h </p>`
    if( vel > 60){
        resul.innerHTML += `<p> Você está <strong> MULTADO</strong> por excesso de Velocidade!</p>`
    }
    resul.innerHTML += `<p> Dirija com cuidado, use cinto de segurança!</p>`
}
