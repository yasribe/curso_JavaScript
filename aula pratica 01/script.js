function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById("img")
    var data = new Date()
    var hora = 22
    msg.innerHTML = (`Agora são ${hora} horas.`)

    if(hora >= 0 && hora <12){
        //BOM DIA
        imagem.src ='img/manha.jpg'
        //COR DE FUNDO
        document.body.style.background = '#CAEAFC'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        imagem.src ='img/tarde.jpg'
        document.body.style.background = '#F4BF88'
    }else{
        //BOA NOITE
        imagem.src ='img/noite.jpg'
        document.body.style.background = '#624C72'
    }
}