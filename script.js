const questions = [
    { question: 'What is 2 + 2?', answer: '4', difficulty: 1 },
    { question: 'What is 5 * 3?', answer: '15', difficulty: 2 },
    { question: 'What is 10 - 7?', answer: '3', difficulty: 1 }
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = `<p>${questions[currentQuestion].question}</p>
                               <input type="text" id="answer">`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer === questions[currentQuestion].answer) {
        score += questions[currentQuestion].difficulty;
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = 'Incorrect. Try again.';
    }
    scoreDisplay.textContent = `Score: ${score}`;
}

startBtn.addEventListener('click', () => {
    displayQuestion();
    startBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    scoreDisplay.textContent = '';
    score = 0;
});

submitBtn.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        quizContainer.innerHTML = '';
        feedback.textContent = `Quiz completed! Your score is: ${score}`;
        submitBtn.style.display = 'none';
    }
});
