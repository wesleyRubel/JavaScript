var criancas = [] //Vetor global de objetos

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
    listar()
}

function listar(){
    if(criancas.length == 0){
        window.alert('Não existem crianças cadastradas')
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