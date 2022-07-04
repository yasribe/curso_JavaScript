//1- Declare uma variável de nome weight 
let = "weight"

// 2 - Que tipo de dado é a variável acima ?
console.log(typeof "weight")

/* 3 - Declare uma variável e atribua valores para cada um dos dados: 
    * nome: String
    * age : number (integer)
    * stars: number (float)
    * isSubscribed: boolean
*/
const info = {
    name: 'jaoa',
    age: 19,
    stars: 1.71,
    isSubscribed: true

}
console.log(info)

/* 4- A variável student abaixo é de que tipo de dados?
4.1 atribua a ela as propriedades e valores.
4.2 mostre no console a segunte mensagem: 
<name> de idade <age> pesa <weight> kg.
*/

let student = {
    name: 'Luan',
    age: 22,
    weight: 80.2
}
console.log(`${student.name} de idade ${student.age}anos e ${student.weight}kg`)


/* 
5 - declare uma variável do tipo array de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

//let students = [];


/* 6 - retribua valor para variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/
let students = [
    student
]

// 7 - coloque no console o valor da posição zero do array 
console.log(students[0])

// 8 - crie um novo student e coloque na posição do array students
const leal = {
    name: 'leal',
    age: 7,
    weight: 30

}
/*
students = [
    student,
    leal
]
*/
students[1] = leal
console.log(students[1])

//9- sem rodar o codigo qual aé aresposta do codigo abaixo e por que ? Após sua resposta rode o codigo e veja se vc acertou.

console.log(a) //undefined pois a variavel está declarada a baixo mesmo a variavel sofrendo elevação
var a = 1
