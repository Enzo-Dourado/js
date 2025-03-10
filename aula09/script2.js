let num = [1, 2, 9, 4, 6, 3]
num.sort()
for(let pos in num){
    if (pos == -1) {
        console.log('Não é possível apresentar resultado!')
    }else {
        console.log(`O valor obtido é ${num[pos]}`)
    }
}