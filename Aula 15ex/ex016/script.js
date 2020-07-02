function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let pas = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //alert('Confere os dados filho!')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <=0 ) {
            //alert('Passo invalido, Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i;c <= f; c += p){
                res.innerHTML += `${c} \u{1F51C} `
            } 
        } else { 
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F51C} `
        }
            
    }
      res.innerHTML += '\u{1F595}'

    }
}