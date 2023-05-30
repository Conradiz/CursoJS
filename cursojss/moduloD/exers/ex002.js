function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('anon')
    var res = document.getElementById('res')
    var select = document.getElementById('sexo')
    var sex = select.options[select.selectedIndex].value
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro verifique os dados')
    }
    else{
        var idade = ano - Number(fano.value)
        window.alert('ok')
        //adicionando o atributo img por JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var genero =''
        if (sex == 'feminino'){
            genero = 'feminino'
            if(idade >0 && idade <=12){
                //crianca 
                img.setAttribute ('src', 'crianca.png')
            }else if (idade < 21){
                //adolescente

            }
        }else if(sex == 'masculino'){
            genero = 'masculino'
            if(idade > 0 && idade <=12){
                //crianca
            }
            else{

            }

        }
        
        res.innerHTML = `sexo: ${sex} e idade: ${idade} anos`  
        res.appendChild(img)
        }

    }
