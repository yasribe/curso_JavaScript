function pedido(){
    var menu = document.querySelector(`input#txtm`)
    var res = document.querySelector(`div#res`)
    var opc = Number(menu.value)

    res.innerHTML = `Opção N° ${opc} escolhida. `

    switch (opc){
        case 1 :
            res.innerHTML += `PIZZA DE MOZZARELLA.......R$ 39,90 ` 
            break
            case 2 : 
            res.innerHTML += `PIZZA DE MARGHERITA.......R$ 39,90 ` 
            break
                case 3 : 
                res.innerHTML += `PIZZA DE CALABRESA.......R$ 39,90 ` 
                break
                    case 4 : 
                    res.innerHTML += `PIZZA DE CATUPIRY.......R$ 39,90 ` 
                    break
                        case 5 : 
                        res.innerHTML += `PIZZA DE PORTUGUESA.......R$ 39,90 ` 
                        break
                        default:
                            res.innerHTML += `[ERRO] opção Invalida`
                            break
    }
    res.innerHTML += `<p>OBRIGADO, Volte sempre!</p>`
}