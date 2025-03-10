let num = [1, 2, 9, 4, 6, 3]
num.sort()
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`Valor não apresentavel!`)
} else {
    console.log(`O valor indicado está na posição ${pos}`)
}