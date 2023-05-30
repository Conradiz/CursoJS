var area = window.document.querySelector('div#area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)
function clicar(){
    area.innerHTML = 'Clicou!'
    area.style.background = 'blue'
    
}
function entrar(){
    area.innerHTML = 'Entrou'
}
function sair(){
    area.innerHTML = 'saiu'
    area.style.background = 'red'
}
function somar(){
     var n1 = window.document.getElementById('txtn1')
     var n2 = window.document.getElementById('txtn2')
     var res = window.document.getElementById('res')
     var nn1 = Number(n1.value)
     var nn2 = Number(n2.value)
     s = nn1 + nn2
     res.innerHTML = `A soma entre ${nn1} e ${nn2} deu ${s}`

}