/*

function() constructor
*expressão new
*criar um novo objeto
*this keyword

*/

function Person (name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
//estanciar um novo objeto

const yes = new Person ('sim')
const biel = new Person ('Biel')
console.log(yes.walk())
console.log(biel.walk())