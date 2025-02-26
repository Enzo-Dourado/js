function calc(){
var ivel = document.getElementById('ivel')
var velocidade = Number(ivel.value)

if (velocidade > 60) { 
    alert('Você foi MULTADO!')
} else {
    alert('Sem multas pendentes!')
}
}
