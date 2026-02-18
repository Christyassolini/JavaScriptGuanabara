function contar() {
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando:<br>`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo Inválido')
            p = 1
        }

        if (i < f) {
            while (i <= f) {
                res.innerHTML += `${i} 👉`
                i += p
            }
        } else {
            while (i >= f) {
                res.innerHTML += `${i} 👉`
                i -= p
            }
        }
        res.innerHTML += `🏁`
    }
}