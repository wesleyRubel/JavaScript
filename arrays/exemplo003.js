var cidades = ['Pelotas','São Lourenço','Porto Alegre']
cidades.splice(3,0,'São Paulo','Curitiba')

//Percorrendo o vetor com a estrutura for
for(var i = 0;i < cidades.length;i++){
    console.log(`Cidade nº${i+1} = ${cidades[i]}`)
}

console.log(`${cidades.toString()} \n\n${cidades.join(' / ')}`)