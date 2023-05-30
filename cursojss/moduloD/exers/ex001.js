function carregar(){
    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12){
        //Bom dia
        img.src = 'manha.png'
    }
    else if (hora>= 12 && hora <18) {
        //Boa tarde
        img.src = 'manha.png'
    }
    else if (hora> 20) {
        img.src = 'manha.png'
    }
}
