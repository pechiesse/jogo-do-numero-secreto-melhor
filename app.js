let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function exibirMensagemInicial(){ 
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Ecolha um número entre 1 e '+numeroLimite);
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabens');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce decobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor que '+chute);
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior que '+chute);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosDaLista == numeroLimite) {
    listaDeNumerosSorteados = []
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
