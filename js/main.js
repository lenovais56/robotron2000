const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', (evento) => {
    console.log(evento);
})

function dizOi(nome) {
    console.log('Oi ' + nome)
    console.log('Bem vindo ao Robotron 2000')
}

dizOi('Leandro');

// ----------------------------------------------------------------- //

const braco = document.querySelector('#braco')
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

const controle = document.querySelectorAll('.controle-ajuste');

const peca = document.querySelectorAll('.peca-titulo')

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados (operacao) {
    if(operacao === '-') {
        braco.value = parseInt(braco.value) -1;
    } else {
        braco.value = parseInt(braco.value) +1; 
    }
}