const questionBank = [
    { question: 'What is 2 + 2?', answer: '4', difficulty: 1 },
    { question: 'What is 5 * 3?', answer: '15', difficulty: 2 },
    // Add more questions here...
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;

function displayQuestion() {
    const currentQuestion = questionBank[currentQuestionIndex];
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = `<p>${currentQuestion.question}</p>
                               <input type="text" id="answer">`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const currentQuestion = questionBank[currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
        correctAnswers++;
        score += currentQuestion.difficulty;
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = 'Incorrect. Try again.';
    }
    scoreDisplay.textContent = `Score: ${score}`;
}

function getNextQuestion() {
    if (correctAnswers >= 5) {
        questionBank[currentQuestionIndex].difficulty++;
        correctAnswers = 0;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questionBank.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = '';
    feedback.textContent = `Quiz completed! Your score is: ${score}`;
    submitBtn.style.display = 'none';
}

startBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    displayQuestion();
    startBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    scoreDisplay.textContent = '';
});

submitBtn.addEventListener('click', () => {
    checkAnswer();
    getNextQuestion();
});

questionBank.sort(() => Math.random() - 0.5);
