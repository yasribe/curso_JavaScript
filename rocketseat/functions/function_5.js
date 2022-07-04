// callback fuction - chamar de volta

function syMyName(name){
    console.log('antes do callback')
   name() 
   console.log('depois do callback')
}

syMyName(
    ()=> {
        console.log('estou em uma callback')
    }
)