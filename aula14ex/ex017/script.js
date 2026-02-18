function tabuada() {
    let num = window.document.getElementById('n')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Coloque algum número!')
    } else {
        let n = Number(num.value)
        let x = 0
        tab.innerHTML = ''

        while (x <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            tab.value = `tab${x}`
            tab.appendChild(item)
            x++
        }
    }
}