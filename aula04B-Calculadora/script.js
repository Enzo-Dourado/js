function somar() {
    var caixa1 = document.getElementById('inum1')
    var caixa2 = document.getElementById('inum2')
    var resultado = document.getElementById('resultado')
    var n1 = Number(caixa1.value)
    var n2 = Number(caixa2.value)
    var soma = n1 + n2
    resultado.innerHTML = `Resultado: ${soma}`
}

function sub() {
    var caixa1 = document.getElementById('inum1')
    var caixa2 = document.getElementById('inum2')
    var resultado = document.getElementById('resultado')
    var n1 = Number(caixa1.value)
    var n2 = Number(caixa2.value)
    var subtrair = n1 - n2
    resultado.innerHTML = `Resultado: ${subtrair}`
}

function mult() {
    var caixa1 = document.getElementById('inum1')
    var caixa2 = document.getElementById('inum2')
    var resultado = document.getElementById('resultado')
    var n1 = Number(caixa1.value)
    var n2 = Number(caixa2.value)
    var multiplicar = n1 * n2
    resultado.innerHTML = `Resultado: ${multiplicar}`
}

function div() {
    var caixa1 = document.getElementById('inum1')
    var caixa2 = document.getElementById('inum2')
    var resultado = document.getElementById('resultado')
    var n1 = Number(caixa1.value)
    var n2 = Number(caixa2.value)
    var dividir = n1 / n2
    resultado.innerHTML = `Resiltado: ${dividir}`
}