const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de backend.",
        "Uma linguagem de marcação para estruturar páginas da web.",
        "Uma linguagem de programação de frontend e backend.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valor e tipo.",
        "Atribuição de valor.",
        "Comparação de valor apenas.",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada no início de um programa.",
        "Uma função que manipula eventos de clique em um navegador web.",
        "Uma função que é passada como argumento para outra função e executada após algum evento.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar elementos HTML por suas classes.",
        "Selecionar elementos HTML por seus IDs.",
        "Selecionar elementos HTML por seus nomes de tag.",
      ],
      correta: 0
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
        "Usando o método 'getType()'.",
        "Usando o operador '==' após a variável.",
        "Usando o operador 'typeof' antes da variável.",
      ],
      correta: 2
    },
    {
    pergunta: "O que é o método 'forEach()' em JavaScript?",
    respostas: [
      "Um método para selecionar elementos HTML por suas classes.",
      "Um método para iterar sobre elementos de um array e executar uma função de callback para cada elemento.",
      "Um método para executar uma função de callback após um determinado evento.",
    ],
    correta: 1
  },
    {
    pergunta: "O que é o objeto 'window' em JavaScript?",
    respostas: [
      "Um objeto que representa a janela do navegador e fornece métodos para interagir com ela.",
      "Um objeto que representa a tela do dispositivo e controla a exibição de conteúdo.",
      "Um objeto que representa o histórico de navegação do usuário no navegador.",
    ],
    correta: 0
  }
  
  ,
    {
      pergunta: "Qual é a função do método 'map()' em JavaScript?",
      respostas: [
        "Iterar sobre elementos de um array e retornar um novo array com os elementos modificados.",
        "Selecionar elementos HTML por suas classes.",
        "Executar uma função de callback após um determinado evento.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma expressão regular em JavaScript?",
      respostas: [
        "Uma forma de declarar funções anônimas em JavaScript.",
        "Uma forma de manipular datas e horas em JavaScript.",
        "Um padrão utilizado para fazer correspondência e pesquisa de strings em JavaScript.",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')//buscar elemento html para colocar na váriavel
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    // ele faz um clone de todas as perguntas
    const quizItem = template.content.cloneNode(true)
  
    //ele modifica a estrutura h3 para as perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
  
      //ele cria um novo loop para trazer a estrutura das respostas
      for(let resposta of item.respostas) {
  
        //ele faz um clone de toda a estrutura 
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
        //ele modifica a estrutura da tag span pelas respostas
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
  
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }
            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }
  
        // ele coloca a respota na tela
        quizItem.querySelector('dl').appendChild(dt)
      }
  
      // ele apaga o "Resposta A" que aparecia fora de contexto
      quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }