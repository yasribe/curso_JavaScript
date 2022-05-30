

var nome = prompt('Qual é seu nome')
document.writeln(`Olá ${nome} seu nome tem ${nome.length} letras`) 
document.writeln(`Seu nome em maiúsculas é ${nome.toUpperCase()}`)
document.writeln(`seu nome em minúsculas é ${nome.toLowerCase()}`)

// para casas decimais

var n = 167.9

n.toFixed(2)

//para mudar . para , 
n.toFixed(2), replace(`.`,`,`)

//para salário 

n.toLocaleString(`pt-BR`, {style: currency, currency:`BRL`})