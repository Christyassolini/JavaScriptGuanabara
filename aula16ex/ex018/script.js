let valores = []
let res = window.document.getElementById('res')

function add() {
    let num = window.document.getElementById('num')

    if (num.value.length == 0) {
        window.alert('Digite um número!')
        num.focus()
        return
    }

    let n = Number(num.value)

    if (n > 100 || n < 0) {
        window.alert('Digite um número de 1 até 100!')
        num.value = ''
        num.focus()
        return
    } else {
        if (valores.includes(n)) {
            window.alert('Valor já presente na lista, coloque outro!')
            num.value = ''
            num.focus()
            return
        } else {
            num.value = ''
            num.focus()
            valores.push(n)
            valores.sort()

            let tab = window.document.getElementById('val')
            let x = 0
            tab.innerHTML = ''

            for (let pos in valores) {
                let item = document.createElement('option')
                item.text = `Valor ${valores[pos]} adicionado.`
                tab.value = `tab${x}`
                tab.appendChild(item)
                x++
            }
            res.innerHTML = ''
        }
    }
}

function finalizar() {
    res.innerHTML = ''

    if (valores.length == 0) {
        res.innerHTML = "<p>Adicione primeiro um número na lista!</p>"
    } else {
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i]
        }
        let media = soma / valores.length

        res.innerHTML = `<p>- Ao todo, temos ${valores.length} números cadastrados.</p><br>`
        res.innerHTML += `<p>- O maior valor informado foi ${maior}.</p><br>`
        res.innerHTML += `<p>- O menor valor informado foi ${menor}.</p><br>`
        res.innerHTML += `<p>- Somando todos os valores temos ${soma}.</p><br>`
        res.innerHTML += `<p>-  A média dos valores digitados é ${media}</p>`
    }
}

