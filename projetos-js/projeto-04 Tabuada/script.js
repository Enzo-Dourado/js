function gerarTabuada() {
    let valor = document.getElementById('idValor')
    let tabuada = document.getElementById('idTabuada')

    if (valor.value.length == 0) {
         alert('Por favor, digite um valor!')
    }else {
        let num = Number(valor.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
           let item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num * contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}