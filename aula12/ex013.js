/*let agora = new Date()
let hora = agora.getHours()*/
/*let hora = 31
console.log(`São ${hora}h`)
if (hora < 6 || hora > 17 && hora < 25) {
    console.log("Boa noite")
} else if (hora > 11 && hora < 18){
    console.log("Boa tarde")
} else if (hora > 24){
    console.log("Hora não existente")
} else{
    console.log("Bom dia")
}*/
let agora = new Date();
let hora = agora.getHours();
console.log(`A hora atual é ${hora}`);
if (hora < 0 || hora > 24) console.log("Hora não existe");
else if (hora < 6 || hora > 17) console.log("Boa noite!");
else if (hora > 5 && hora < 12) console.log("Bom dia!");
else if (hora > 11 && hora < 18) console.log("Boa tarde!");
