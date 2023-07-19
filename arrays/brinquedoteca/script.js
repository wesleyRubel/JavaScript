var criancas = [] //Vetor global de objetos
var idades = [] //Vetor global para guardar as idades

function validar(v, i) {
    if (v.length == 0 || i.length == 0) {
        window.alert('Preencha todos os campos')
        return false
    } else if (Number(i) < 1 || Number(i) > 11) {
        window.alert('Fora da faixa etária (1 até 11 anos)')
        return false
    } else {
        return true
    }
}

function adicionar() {
    var nome = window.document.querySelector('input#nome')
    var idade = window.document.querySelector('input#idade')
    var v = validar(nome.value, idade.value)
    if(!v){
        nome.value = ''
        idade.value = ''
        nome.focus()
        return
    }
    var n = nome.value
    var i = Number(idade.value)
    criancas.push({nam:n,id:i})
    if(idades.indexOf(i) == -1){
        idades.push(i)
    }
    listar()
}

function listar(){
    if(criancas.length == 0){
        window.alert('Não existem crianças cadastradas')
        window.document.querySelector('input#nome').focus() 
        return
    }
    var saida = window.document.querySelector('div#saida')
    saida.innerHTML = '' 
    var lista = window.document.createElement('p')
    saida.appendChild(lista)
    for(var c = 0;c < criancas.length;c++){
        lista.innerHTML += `${criancas[c].nam} - ${criancas[c].id} anos <br>`
    } 
    window.document.querySelector('input#nome').value = ''
    window.document.querySelector('input#idade').value = ''
    window.document.querySelector('input#nome').focus()  
}

function filtrar(){
    if(criancas.length == 0){
        window.alert('Não existem crianças cadastradas')
        window.document.querySelector('input#nome').focus() 
        return
    } 
    var saida = window.document.querySelector('div#saida')
    saida.innerHTML = ''
    var lista = window.document.createElement('p')
    saida.appendChild(lista)
    var numIdade
    var nomes  
    var per 
    idades.sort(function(a,b){return a-b})
    for(var i = 0;i < idades.length;i++){
        per = 0
        numIdade = 0
        nomes = ''
        for(var j = 0;j < criancas.length;j++){
            if(idades[i] == criancas[j].id){
                numIdade++
                nomes += `${criancas[j].nam}, `
            }
        }
        per = numIdade/criancas.length*100
        lista.innerHTML += `${idades[i]} ano(s): ${numIdade} criança(s) - ${per.toFixed(2)}% <br> (${nomes}) <br><br>`
    }
}