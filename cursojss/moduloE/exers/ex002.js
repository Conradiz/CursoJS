function calcular(){
    var num = window.document.getElementById('nt')
    var res = window.document.getElementById('res')
    var sel = window.document.getElementById('selta')
    if (num.value.length == 0){
        window.alert('Precisa de um valor, por favor digite um numero!')
        sel.innerHTML = ''
    }
    else{
        let n = Number(nt.value)
        sel.innerHTML = ''
        for(let c = 1;c <= 15; c++){
            let resul = n*c
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${resul} `
            sel.appendChild(item)
        }
    }
}