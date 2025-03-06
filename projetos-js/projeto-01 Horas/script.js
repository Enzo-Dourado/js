function carregar() {

    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#d9ff2f'
        document.body.style.color = 'green'
        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#f58529fa'
        document.body.style.color = '#f58529fa'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#05053a'
        document.body.style.color = '#05053a'
    }
}