var agora = new Date()
var hora = agora.getHours()
console.log(`${hora} horas.`)

if (hora <= 6) {
    console.log(`São exatamente ${hora} da Madrugada`)

} else if (hora <= 12){
    console.log(`São exatamente ${hora} da Manhã`) 

} else if (hora <= 18){
    console.log(`São exatamente ${hora} da Tarde`)

} else {
    console.log(`São exatamente ${hora} da Noite`)

    }
