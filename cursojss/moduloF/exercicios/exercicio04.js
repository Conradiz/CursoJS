function contar(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = window.document.querySelector('passo');

    if (inicio.value.lenght == 0){
        window.alert('ERRO');
    }
    else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0){
            window.alert("Passo invalido")
            p = 1
        }
        if(i < f ){
            while(i < f){
                i++
            }
        }    
        else {
            while(f > i){
                i--

            }
        }

        }
    
    }
