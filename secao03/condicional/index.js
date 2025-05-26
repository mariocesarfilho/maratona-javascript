/**
 * Entre 0 a 11 - Bom dia
 * Entre 12 a 17 - Boa tarde
 * Entre 17 a 23 - Boa noite
 */

const hora = 23;

if (hora > 0 && hora < 12){
    console.log("Bom dia!");
}else if(hora > 11 && hora < 18){
    console.log('Boa tarde!');
}else{
    console.log('Boa noite!');
}