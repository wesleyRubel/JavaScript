var carros = [] //Array global que irá receber os veículos
var res = window.document.getElementById('saida')

function validar(mod, pre) {
    if (mod.length == 0 || pre == 0) {
        window.alert('É necessário preencher todos os campos')
        return true
    } else if (pre < 5000) {
        window.alert('Valor informado abaixo da tabela')
        return true
    } else {
        return false
    }
}

function adicionar() {
    var mod = window.document.getElementById('mod')
    var pre = window.document.getElementById('preco')
    var v = validar(mod.value, pre.value)
    if (v) {
        mod.value = ''
        mod.focus()
        pre.value = ''
        return
    }
    //window.alert('Tudo OK até aqui!')
    res.innerHTML = ''
    var m = mod.value
    var p = Number(pre.value)
    carros.push({ modelo: m, preco: p })
    for (var i = 0; i < carros.length; i++) {
        res.innerHTML += `${carros[i].modelo} - R$: ${carros[i].preco} <br>`
    }
    mod.value = ''
    mod.focus()
    pre.value = ''
}