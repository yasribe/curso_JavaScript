function consultar(){
    var pais = document.querySelector('input#txtpais')
    var resultado = document.querySelector('div#resultado')
    var Mora = (pais.value)
    resultado.innerHTML = `Você Mora no ${Mora}!`
    if (Mora == 'brasil'){
        resultado.innerHTML += `<p>Você é <strong> Brasileiro </strong>!</p>`
    } else{
        resultado.innerHTML += `<p>Você é <strong> Estrangeiro </strong>!</p>`
    }

}