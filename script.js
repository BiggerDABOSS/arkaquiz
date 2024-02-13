const questions = [
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is 5 * 3?', answer: '15' },
    { question: 'What is 10 - 7?', answer: '3' }
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');

let currentQuestion = 0;

function displayQuestion() {
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = `<p>${questions[currentQuestion].question}</p>
                               <input type="text" id="answer">`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer === questions[currentQuestion].answer) {
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = 'Incorrect. Try again.';
    }
}

startBtn.addEventListener('click', () => {
    displayQuestion();
    startBtn.style.display = 'none';
    submitBtn.style.display = 'block';
});

submitBtn.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        quizContainer.innerHTML = '';
        feedback.textContent = 'Quiz completed!';
        submitBtn.style.display = 'none';
    }
});
