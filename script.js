const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "voce sabe como usar inteligencia artificial",
        alternativas:["SIM","NAO"]
    },
    {
        enunciado: "A INTELIGENCI ARTIFICIAL é boa para educaçao",
        alternativas:["sim","nao"]
    },
    {
        enunciado: "voce sabe como funciona uma IA",
        alternativas:["sim","nao"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posiçao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraALternativas();
}

function mostraALternativas()[
    for(const alternativa of perguntaAtual . alternativa)[
        const botaoalternativa = document.createELement("button");
        botaoalternativa.textContent = alternativa
    ]
]

