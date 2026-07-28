function carregar() {
    var col = window.document.body
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.jpg'
        col.style.background = 'rgb(214, 193, 168)'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.jpg'
        col.style.background = 'rgb(212, 153, 138)'
    }else{
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
        col.style.background = 'rgb(0, 49, 70)'
    }
}