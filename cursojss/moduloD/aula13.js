function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora <12){
        //Bom dia
        img.src = 'manha.png'
    }
    else{
        img.src = 'manha.png'
    }
}