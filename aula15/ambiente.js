let num = [5, 8 , 2, 9, 3]
num.push(1)
num.sort() //Comando para organizar elementos em ordem crescente

console.log(num)
console.log(`Nosso vetor tem o total de ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(1)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}