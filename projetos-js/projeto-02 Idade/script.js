function verificar() {
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var anoValor = document.getElementById('itxt')
    var res = document.getElementById('res')

    if (anoValor.value.length == 0 || anoValor.value > anoAtual || anoValor.value < 1900) {
        alert('[ERRO] Verifiquie os dados e TENTE NOVAMENTE!')
    }else {
       var sexo = document.getElementsByName('sex')
       var idade = anoAtual - Number(anoValor.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (sexo[0].checked) {
        genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/crianca-M.jpg')                
            } else if (idade >= 10 && idade < 16) {
                // adolescente
                img.setAttribute('src', 'imagens/adol-M.jpg') 
            } else if (idade >= 16 && idade < 18) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-M.jpg') 
            } else if ( idade >= 18 && idade < 59) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-M.jpg') 
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-M.jpg') 
            }
            
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/crianca-F.jpg')
            } else if (idade >= 10 && idade < 16) {
                // adolescente
                img.setAttribute('src', 'imagens/adol-F.jpg')
            } else if (idade >= 16 && idade < 18) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-F.jpg')
            } else if ( idade >= 18 && idade < 59) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-F.jpg')        
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa-F.jpg')             
            }
       }
       res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos.`
       
       res.appendChild(img)
    }
}