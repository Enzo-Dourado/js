var area = document.getElementById('area')
area.addEventListener('click', cliqueAqui)
area.addEventListener('mouseenter', entreAqui)
area.addEventListener('mouseout', saiu)

var area2 = document.getElementById('area2')
area2.addEventListener('click', clicarAqui)
area2.addEventListener('mouseenter', entrarAqui)
area2.addEventListener('mouseout', sair)

// Area 1
function cliqueAqui() {
    area.style.backgroundColor = 'darkblue'
    area.style.color = 'white'
    area.innerText = 'Clicou!'
}

function entreAqui() {
    area.style.backgroundColor = 'green'
    area.innerText = 'Entrou!'
}

function saiu() {
    area.style.backgroundColor = 'aqua'
    area.style.color = 'black'
    area.innerText = 'Saiu!'
}

// Area 2

function clicarAqui() {
    area2.style.backgroundColor = 'darkred'
    area2.style.color = 'white'
    area2.innerText = 'Clicou!'
}

function entrarAqui() {
    area2.style.backgroundColor = 'orange'
    area2.innerText = 'Entrou!'
}

function sair() {
    area2.style.backgroundColor = 'aqua'
    area2.style.color = 'black'
     area2.innerText = 'Saiu!'
}