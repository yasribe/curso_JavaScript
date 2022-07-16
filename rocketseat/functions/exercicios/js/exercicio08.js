/*Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
*/

let altura = 5
let largura = 10
let area = altura * largura 
let QntTinta = area / 2 
console.log(`A área: ${area}M²`);
console.log(`A Quantidade de Tinta: ${QntTinta}L`);