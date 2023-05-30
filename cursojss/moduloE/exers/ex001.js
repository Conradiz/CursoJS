function contar(){ 
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO')
    }
    else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <=f; c += p){
                res.innerHTML += `${c},`
        }
        
        }else{
            //contagem regressiva
            for(let c = i; c >=f; c -= p){
                res.innerHTML += `${c}, `
            }

        }
    }

}