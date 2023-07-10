//Declarando um array de objetos

var carros = []
carros.push({modelo:'Fusca',preco:6500})
carros.push({modelo:'Escort',preco:7800})
carros.push({modelo:'Pálio',preco:10500})

var menorPreco = true
console.log(carros)
for(var i = 0;i < carros.length;i++){
    if(carros[i].preco <= 5000){
        console.log(`${carros[i].modelo} R$ ${carros[i].preco}`)
        menorPreco = false
    }
}

if(menorPreco){
    console.log("Não foram encontrados resultados para a pesquisa")
}

/*var idades = [12,13,15,17,14,18,7,22]
var maiorIdade = true
for(var i = 0;i < idades.length;i++){
    if(idades[i] >= 18){
        console.log(idades[i])
        maiorIdade = false
    }
}

if(maiorIdade){
    console.log('Não foram encontrados maiores de idade')
}*/