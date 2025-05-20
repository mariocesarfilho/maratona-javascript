const numero = Number(prompt('Digite um número: '));

const raizQuadrada = Math.sqrt(numero);
const inteiro = Number.isInteger(numero);
const numeroNaN = Number.isNaN(numero);
const arredondarBaixo = Math.floor(numero);
const arredondaCima = Math.ceil(numero);
const duasCasas = numero.toFixed(2);

document.body.innerHTML += `Seu número é ${numero} <br />`;
document.body.innerHTML += `A raiz quadrada do seu número é ${raizQuadrada} <br />`;
document.body.innerHTML += `${numero} é inteiro: ${inteiro} <br />`;
document.body.innerHTML += `${numero} é NaN: ${numeroNaN} <br />`;
document.body.innerHTML += `Arredondando para baixo: ${arredondarBaixo} <br />`;
document.body.innerHTML += `Arredondando para cima: ${arredondaCima} <br />`;
document.body.innerHTML += `Com duas casas decimais: ${duasCasas} <br />`;


