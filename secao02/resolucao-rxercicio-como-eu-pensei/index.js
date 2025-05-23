const objectPessoa = [];
const pessoa = {
    nome,
    sobrenome,
    peso,
    altura,

    enviarDados(){
        this.nome = document.querySelector('input#nome').value;
        this.sobrenome = document.querySelector('input#sobrenome').value;
        this.peso = document.querySelector('input#peso').value;
        this.altura = document.querySelector('input#altura').value;
        
    }
};


function enviar(){

    pessoa.enviarDados();
     const copia = {
        nome: pessoa.nome,
        sobrenome: pessoa.sobrenome,
        peso: pessoa.peso,
        altura: pessoa.altura,
     }
 

    objectPessoa.push(copia);
    console.log(objectPessoa);

};

