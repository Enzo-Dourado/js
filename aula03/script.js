var corpo = document.body
corpo.style.backgroundColor = 'yellow'

var p1 = document.getElementsByTagName('p')[0]
document.writeln(`Está escrito assim: ${p1.innerText}`)
p1.style.backgroundColor = 'violet'

var clique = document.getElementById('clique')
clique.style.color = 'darkgreen'

var titulo = document.getElementsByName('titulo') [0]
titulo.style.backgroundColor = 'white'
titulo.innerText = 'Estou estudando >DOM<'

var paragrafo = document.getElementsByClassName('paragrafo') [0]
paragrafo.style.backgroundColor = 'azure'