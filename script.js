const perguntas = [
    {
      pergunta: "Qual é o maior rio do mundo em volume de água?",
      respostas: [
        "Rio Nilo",
        "Rio Amazonas",
        "Rio Yangtzé"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a capital da Austrália?",
      respostas: [
        "Sydney",
        "Melbourne",
        "Camberra"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o país mais populoso do mundo?",
      respostas: [
        "Índia",
        "Estados Unidos",
        "China"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o maior deserto do mundo?",
      respostas: [
        "Deserto do Saara",
        "Deserto da Arábia",
        "Deserto de Gobi"
      ],
      correta: 0
    },
    {
      pergunta: "Em qual continente está localizada a Patagônia?",
      respostas: [
        "África",
        "América do Sul",
        "Oceania"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o ponto mais alto da Terra?",
      respostas: [
        "Monte Everest",
        "K2",
        "Makalu"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o país com a maior área territorial do mundo?",
      respostas: [
        "Rússia",
        "Canadá",
        "China"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o menor país do mundo em área territorial?",
      respostas: [
        "Vaticano",
        "Mônaco",
        "San Marino"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o maior lago de água doce do mundo em volume?",
      respostas: [
        "Lago Baikal",
        "Lago Superior",
        "Lago Titicaca"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o país com a maior costa marítima do mundo?",
      respostas: [
        "Noruega",
        "Canadá",
        "Brasil"
      ],
      correta: 2
    }
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size +' de '+ totalDePerguntas
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
      mostrarTotal.textContent = corretas.size +' de '+ totalDePerguntas
     }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
         
    quiz.appendChild(quizItem)
  }