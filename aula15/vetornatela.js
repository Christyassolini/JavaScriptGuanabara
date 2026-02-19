// let num = [2, 5, 8, 3, 1, 4, 9]
// num.sort()

// for(let pos = 0; pos < num.length; pos++) {
//     console.log(`Na posição ${pos} temos o ${num[pos]}`)
// }

let num = [2, 5, 8, 3, 1, 4, 9]
num.sort()

for (let pos in num) {
    console.log(`Na posição ${pos} temos ${num[pos]}.`)
}