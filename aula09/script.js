// Variáveis Compostas
/* 
    Guarda mais de um valor para variável
    let num = [1 , 5, 10]
               0   1   2
    para adicionar um espaço
    num[3] = 6 ou
    num.push(valor)
    num == [1 , 5, 10, 6]
            0   1   2   3
    PARA COLOCAR NA RESPOSTA == O QUE SERÁ MOSTRADO
    num.length == Comprimento do array
    num.sort() == Organiza em ordem crescente os valores do array

    for(let pos IN num) {
    console.log(num[pos])
    }

    num.indexOf(6) == Busca um VALOR dentro do array
*/

let num = [5, 6, 1, 9, 10, 4]
num[6] = 11
num.push(12)
num.sort()
console.log(`O vetor é ${num}`)
console.log(`Nosso vetor tem tamanho ${num.length}`)
console.log(`O primeiro valor é ${num[0]}`)
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}