function enviar() {
    var txt = document.getElementById('itxt')
    var pais = (txt.value)
    if (pais == 'Brasil') {
        alert('Você é Brasileiro')
    } else {
        alert('Você é Gringo')
    }
}