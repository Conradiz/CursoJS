function entrar(){
    var agora = new Date()
    var diaSem = 2 //agora.getDay()
    var idad = document.getElementById('idade')
    var ida = Number(idad.value)
    var sexo = document.getElementById('sexo')
    window.alert(`Sexo escolhido ${sexo.value}`)
    if (ida >= 18 && ida < 65){
        res.innerHTML = `Voce ja tem ${ida} anos`
        res.innerHTML += 'Voto obrigatorio '
        if (sexo.value == 'feminino'){
            res.innerHTML += `sexo: feminino`
        }
        else{
            res.innerHTML += 'sexo masculino'
        }
            switch(diaSem){
                case 0:
                    window.alert('Hoje é domingo')
                    break
                case 1: 
                    window.alert('Hoje é segunda')
                    break
                case 2:
                    window.alert('Hoje é Terça')
                    break
                case 3: 
                    window.alert('Hoje é quarta')
                    break
                case 4:
                    window.alert('Hoje é Quinta')
                    break
                case 5: 
                    window.alert('Hoje é Sexta')
                    break
                case 6:
                    window.alert('Hoje é sabado')
                    break
                default:
                    window.alert('Dia invalido')
                    break
            }
    }
    else if (ida>=16 || ida >65){
        res.innerHTML = `Voce tem ${ida} anos `
        res.innerHTML += 'voto opcional '
        if(sexo.value == 'masculino'){
            res.innerHTML += 'Sexo: masculino'
        }
        else{
            res.innerHTML += 'Sexo: feminino'
        }
    }
    else {
        res.innerHTML = `Voce só tem ${ida} anos `
        res.innerHTML += 'voto não permitido'
    }
}