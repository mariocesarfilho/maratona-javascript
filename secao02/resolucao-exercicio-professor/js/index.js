function enviarFomulario(){
    //Pegando informações do formulário
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    //Método antigo
    // //criando evento de enviar informações
    // form.onsubmit = function(evento){
    //     //Impedindo atualização da página
    //     evento.preventDefault();
    //     console.log('Formulário Enviado!');
    // }

    const pessoas = [];

    //Método moderno
    function addFormulario(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //Minha forma de pensar
        // const pessoaObjeto = {
        //     nome,
        //     sobrenome,
        //     peso,
        //     altura,

        //     enviar(){
        //     pessoas.push(nome, sobrenome, peso, altura);    
        //     }
        // };

        // pessoaObjeto.enviar();
        // console.log(pessoas);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${peso.value} kg e ${altura.value} metros. </p>`;

    }
    //Adicionando evento de enviar formulário, necessário chamar um função com alguma ação
    form.addEventListener('submit', addFormulario);
            
        
        
}

enviarFomulario();