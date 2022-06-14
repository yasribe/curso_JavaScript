function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)

    if (fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO] Digite novamente !`)
    } else{
        var fsex= document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ``
        if(fsex[0].checked){
            genero = `Homem`
            if(idade >=0 && idade <10){
                //criança
               img.src =`img/crianca-m.jpg`
            }else if(idade < 21){
                //jovem
                img.src =`img/jovem-m.jpg`
            } else if (idade < 50) {
                //adulto
                img.src =`img/adulto-m.jpg`
            }else{
                //idoso
                img.src =`img/idoso-m.jpg`
            }
        }else if (fsex[1].checked){
            genero = `Mulher`
        }if(idade >=0 && idade <10){
            //criança
        }else if(idade < 21){
            //jovem
        } else if (idade < 50) {
            //adulto
        }else{
            //idoso
        }
    }
}