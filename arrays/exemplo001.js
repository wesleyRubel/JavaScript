var cidades = ['Pelotas'] //Declara um vetor e adiciona um elemento (cidades[0] == 'Pelotas')
cidades.push('São Lourenço') //Adiciona a string 'São Lourenço' ao final do vetor (cidades[1] == 'São Lourenço')
cidades.unshift('Porto Alegre') //Adiciona a string 'Porto Alegre' ao início do vetor e desloca os demais elementos uma posição abaixo
/*
    cidades[0] = 'Porto Alegre'
    cidades[1] = 'Pelotas'
    cidades[2] = 'São Lourenço'
*/
var retirada = cidades.pop() //Remove o último elemento do vetor e passa para a variável 'retirada'
cidades.push(retirada)
retirada = cidades.shift() //Remove o primeiro elemento do vetor e descolaca os demais elementos uma posição acima
console.log(cidades)
console.log(retirada)