// Variáveis Iniciais
function cliqueAqui() {
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passos = document.getElementById('ipassos')
    var resultado = document.getElementById('resultado')

// Contagem
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        resultado.innerHTML = 'Impossível contar!'
        alert('[ERRO] Verifique se está faltando alguma informação!')
    }else {
        resultado.innerHTML = 'Contando... <br>'
        // Dados Salvos
        var nInicio = Number(inicio.value)
        var nFim = Number(fim.value)
        var iPassos = Number(passos.value)
        if (iPassos <= 0) {
            alert('Passo Inválido! Considerando como Passo [1]')
            iPassos = 1
        }

        if (nInicio < nFim){
            //crescente
           for(var contador = nInicio; contador <= nFim; contador += iPassos) {
            resultado.innerHTML += ` ${contador} \u{27A1}\u{FE0F}`
            }
            resultado.innerHTML += `\u{1F3C1}` 
        }else {
            //decrescente
            for(var contador = nInicio; contador >= nFim; contador -= iPassos) {
                resultado.innerHTML += `${contador} \u{27A1}\u{FE0F}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        
    }

}
// Formatação de Emoji para JS
// \u{codigo}

// 	U+1F3C1 bandeira
// 	U+27A1 U+FE0F seta
