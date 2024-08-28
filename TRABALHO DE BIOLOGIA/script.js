const questions = [
    {
        description: "Este processo envolve uma divisão celular para criar células geneticamente idênticas.",
        correctAnswer: "mitose"
    },
    {
        description: "Este processo é responsável pela produção de gametas, e envolve duas divisões celulares.",
        correctAnswer: "meiose"
    },
    {
        description: "Durante este processo, o número de cromossomos é reduzido pela metade.",
        correctAnswer: "meiose"
    },
    {
        description: "Neste processo, cada célula filha recebe um conjunto completo de cromossomos.",
        correctAnswer: "mitose"
    }
];

let currentQuestion = 0;

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('description').textContent = question.description;
    document.getElementById('result').textContent = '';
    document.getElementById('next').style.display = 'none';
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    if (answer === question.correctAnswer) {
        document.getElementById('result').textContent = 'Correto!';
    } else {
        document.getElementById('result').textContent = 'Incorreto. Tente novamente.';
    }
    document.getElementById('next').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById('description').textContent = 'Você completou o jogo!';
        document.getElementById('result').textContent = '';
        document.getElementById('next').style.display = 'none';
    }
}

// Inicializar o jogo
showQuestion();
