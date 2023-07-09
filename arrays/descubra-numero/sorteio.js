var erros = [] //Array global que ira receber as tentativas do usuário
var sorteado = Math.floor(Math.random() * 100) + 1 //Gera um número aleatório entre 1 e 100
const chances = 6 //Declara uma constante com o total de chances
var numErros = 0
var dica = window.document.querySelector('p#outDica')
var nErros = window.document.querySelector('p#outErros')
var nChances = window.document.querySelector('p#outChances')
nChances.innerHTML = `Chances: ${chances}`
var btApostar = window.document.querySelector('input#ap')
var btJogar = window.document.querySelector('input#ng')
btApostar.addEventListener('click', apostar)
btJogar.addEventListener('click',jogarNovamente)
//window.alert(sorteado)

function apostar() {
    //Recebendo e validando o número de entrada
    var num = window.document.querySelector('input#num')
    if (num.value.length == 0) {
        window.alert('Aposte em um número')
        num.focus()
    } else {
        //window.alert('Número escolhido!')
        var numero = Number(num.value)
        //Verificando se o usuário digitou um número já escolhido
        if (erros.indexOf(numero) != -1) {
            window.alert(`O número ${numero} já foi escolhido`)
            num.value = ''
            num.focus()
            return
        }
        //Verificando se o número escolhido pelo usuário é o número sorteado
        if (numero == sorteado) { //Caso seja o número sorteado
            window.alert('Parabéns!!! Você acertou o número')
            dica.innerHTML = `Parabéns!!! ${numero} é o número sorteado`
            btApostar.disabled = true
            btJogar.style.display = "inline-block"
        } else { //Caso não seja o número sorteado
            erros.push(numero)
            numErros = erros.length
            if (erros.length < 6) {
                nErros.innerHTML = `Erros: ${numErros} (${erros})`
                nChances.innerHTML = `Chances: ${chances - numErros}`
                dica.innerHTML = `Dica: É um número ${numero > sorteado ? 'Menor' : 'Maior'} que ${numero}`
            }else{
                window.alert('GAME OVER!')
                nErros.innerHTML = `Erros: ${numErros} (${erros})`
                nChances.innerHTML = `Chances: ${chances - numErros}` 
                dica.innerHTML = `GAME OVER! O número sorteado era ${sorteado}`
                btApostar.disabled = true
                btJogar.style.display = "inline-block"
            }
        }

    }
    num.value = ''
    num.focus()
}

function jogarNovamente(){ //Função para recarregar a página
    location.reload() //Recarrega á página
}
