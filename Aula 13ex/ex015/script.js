function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] Confira seus dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
          } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'bebe-f.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'jovem-f.png')
                } else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'adulto-f.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idodo-f.png')
                }
          }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos um(A) ${gênero} com ${idade} anos.`
         res.appendChild(img)
    }

}



