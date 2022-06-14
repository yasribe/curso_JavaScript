function consultar(){
    var pedido = document.querySelector(`input#txtc`)
    var res = document.querySelector(`div#res`)
    var coffe = (pedido.value)
    res.innerHTML = `Você escolheu 1 ${coffe}`

    if(coffe == `café expresso`){
        res.innerHTML += `: valor R$4,50`
    }else{
        res.innerHTML += `: valor R$2,50`
    }
    res.innerHTML += `<p><strong>Obrigado por compra volte sempre!</strong></p>`
}