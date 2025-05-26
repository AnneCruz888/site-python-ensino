const perguntas = [
    {
      pergunta: "O que o comando print() faz em Python?",
      opcoes: ["Imprime algo na tela", "Lê dados do teclado", "Salva um arquivo", "Envia email"],
      correta: 0
    },
    {
      pergunta: "Qual o tipo de dado retornado por input()?",
      opcoes: ["int", "str", "bool", "float"],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para potenciação?",
      opcoes: ["^", "**", "//", "%"],
      correta: 1
    },
    {
      pergunta: "Como declaramos uma função em Python?",
      opcoes: ["function minhaFunc()", "def minhaFunc():", "fun minhaFunc{}", "define minhaFunc:"],
      correta: 1
    },
    {
      pergunta: "Qual estrutura de repetição existe em Python?",
      opcoes: ["for", "repeat", "loop", "foreach"],
      correta: 0
    }
  ];
  
  let indice = 0;
  
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const resultadoEl = document.getElementById("resultado");
  const botaoProxima = document.getElementById("proxima");
  
  function carregarPergunta() {
    const atual = perguntas[indice];
    perguntaEl.textContent = atual.pergunta;
    opcoesEl.innerHTML = "";
    resultadoEl.textContent = "";
  
    atual.opcoes.forEach((texto, i) => {
      const li = document.createElement("li");
      li.textContent = texto;
      li.classList.add("opcao");
      li.onclick = () => verificarResposta(i);
      opcoesEl.appendChild(li);
    });
  }
  
  function verificarResposta(respostaSelecionada) {
    const correta = perguntas[indice].correta;
    const opcoes = document.querySelectorAll(".opcao");
    opcoes.forEach((el, i) => {
      el.classList.remove("correta", "errada");
      if (i === correta) el.classList.add("correta");
      if (i === respostaSelecionada && i !== correta) el.classList.add("errada");
    });
  
    resultadoEl.textContent = respostaSelecionada === correta ? "✅ Correto!" : "❌ Errado.";
  }
  
  botaoProxima.onclick = () => {
    indice = (indice + 1) % perguntas.length;
    carregarPergunta();
  };
  
  carregarPergunta();
  