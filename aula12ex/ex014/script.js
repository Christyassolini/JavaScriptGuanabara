function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        img.src = 'manhã.jpg'
        document.body.style.background = 'rgb(44, 115, 148)'
    } else if (hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(119, 66, 6)'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(1, 42, 61)'
    }
}