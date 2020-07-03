let vetor = [0,2,4,6,9]

/*for(let pos = 0;pos < vetor.length; pos++ ){
   console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}*/

    for(let pos in vetor){
        console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
    }
    let num = vetor.indexOf()
    if (num == -1) {
        console.log('O valor não foi encontrado')
    } else {
        console.log(`O valor está na posição ${num}`)
    }