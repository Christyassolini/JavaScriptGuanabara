function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res') //Mesma coisa que o usar o getElementById()
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolescente-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolescente-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-f.jpg')
            } else {
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que é ${genero} de: ${idade}`
        res.appendChild(img)
    }
}