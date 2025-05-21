// const nome1 = 'Marcos';
// const sobrenome1 = 'Teles';
// const idade1 = 12;

// [] = Array | {} = Objeto Literal
const pessoa1 = {
    nome: 'Marcos',
    sobrenome: 'Teles',
    idade: 25,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi!`);
        console.log(`${this.nome} possui ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// console.log(pessoa1.nome);

//Esse tipo de funciton são chamadas de factory pois cria um objeto
function criarObjeto(nome, sobrenome, idade){
    // return {
    //     nome: nome,
    //     sobrenome: sobrenome,
    //     idade: idade
    // };
    return {nome, sobrenome, idade};
};
//argumento é o valor passado para o argumento
const pessoa2 = criarObjeto('Tales', 'Silva', 29);

console.log(pessoa2);