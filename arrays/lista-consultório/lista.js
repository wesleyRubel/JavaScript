var pacientes = [] //Array para guardar a lista de pacientes
//Criando os objetos para os elementos HTML
var pac = window.document.getElementById('pac')
var res = window.document.getElementById('saida')
var btAd = window.document.getElementById('ad')
var btUg = window.document.getElementById('ug')
var btAt = window.document.getElementById('at')
var pos = 0

//Associando o evento click aos botões
btAd.addEventListener('click', adicionar)
btUg.addEventListener('click', urgencia)
btAt.addEventListener('click', atender)

function adicionar() {
    if (pac.value.length == 0) {
        window.alert('Informe o nome do paciente')
        pac.focus()
    } else {
        //window.alert('Tudo OK!')
        res.innerHTML = ''
        pacientes.push(pac.value)
        var lista = window.document.createElement('p')
        res.appendChild(lista)
        for (var i = 0; i < pacientes.length; i++) {
            lista.innerHTML += `${i + 1}. ${pacientes[i]} <br>`
        }
    }
    pac.value = ''
    pac.focus()
}

function urgencia(){
    if(pac.value.length == 0){
        window.alert('Informe o nome do paciente')
        pac.focus()
    }else{
        //window.alert('Tudo OK!')
        res.innerHTML = ''
        var lista = window.document.createElement('p')
        res.appendChild(lista)
        if(pos == 0){
            pacientes.unshift(pac.value)
        }else{
            pacientes.splice(pos,0,pac.value)
        }
        for(var i = 0;i < pacientes.length;i++){
            lista.innerHTML += `${i+1}. ${pacientes[i]}<br>`
        }
        pos++
    }
    pac.value = ''
    pac.focus()
}

function atender(){
    if(pacientes.length == 0){
        window.alert('Não existem pacientes na lista de espera')
        pac.focus()
    }else{
        //window.alert('Tudo OK!')
        res.innerHTML = ''
        window.document.getElementById('paciente').innerHTML = ''
        var retirada = pacientes.shift()
        var at = window.document.createElement('span')
        var lista = window.document.createElement('p')
        res.appendChild(lista)
        window.document.getElementById('paciente').innerHTML = '<strong>Em atendimento:</strong> '
        window.document.getElementById('paciente').appendChild(at)
        at.innerText = `${retirada}`
        at.style.fontWeight = "bold"
        at.style.color = "blue"
        for(var i = 0;i < pacientes.length;i++){
            lista.innerHTML += `${i+1}. ${pacientes[i]}<br>`
        }
        if(pos > 0){
            pos--
        }
    }
}