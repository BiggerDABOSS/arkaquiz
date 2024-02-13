const questionBank = [
{ question: 'What is 2 + 2 ', answer: '4', difficulty: 1 },
{ question: 'What is 3 + 5', answer: '8', difficulty: 1 },
{ question: 'What is 6 - 3', answer: '3', difficulty: 1 },
{ question: 'What is 7 + 4', answer: '11', difficulty: 1 },
{ question: 'What is 9 - 5', answer: '4', difficulty: 1 },
{ question: 'What is 8 + 6', answer: '14', difficulty: 1 },
{ question: 'What is 10 - 2', answer: '8', difficulty: 1 },
{ question: 'What is 15 + 9', answer: '24', difficulty: 1 },
{ question: 'What is 20 - 7', answer: '13', difficulty: 1 },
{ question: 'What is 18 + 3', answer: '21', difficulty: 1 },
{ question: 'What is 20 + 5 ', answer: '25', difficulty: 2 },
{ question: 'What is 48 - 24', answer: '24', difficulty: 2 },
{ question: 'What is 16 + 73', answer: '89', difficulty: 2 },
{ question: 'What is 29 - 12', answer: '17', difficulty: 2 },
{ question: 'What is 77 + 22', answer: '99', difficulty: 2 },
{ question: 'What is 65 - 34', answer: '31', difficulty: 2 },
{ question: 'What is 73 + 56', answer: '129', difficulty: 2 },
{ question: 'What is 118 - 94', answer: '24', difficulty: 2 },
{ question: 'What is 5 + 4', answer: '9', difficulty: 2 },
{ question: 'What is 9 - 5', answer: '4', difficulty: 2 },
{ question: 'What is 12 + 7 ', answer: '19', difficulty: 3 },
{ question: 'What is 15 - 6', answer: '9', difficulty: 3 },
{ question: 'What is 9 + 8', answer: '17', difficulty: 3 },
{ question: 'What is 14 - 5', answer: '9', difficulty: 3 },
{ question: 'What is 11 + 6', answer: '17', difficulty: 3 },
{ question: 'What is 16 - 7', answer: '9', difficulty: 3 },
{ question: 'What is 13 + 9', answer: '22', difficulty: 3 },
{ question: 'What is 17 - 8', answer: '9', difficulty: 3 },
{ question: 'What is 10 + 11', answer: '21', difficulty: 3 },
{ question: 'What is 19 - 9', answer: '10', difficulty: 3 },
{ question: 'What is 25 + 16 ', answer: '41', difficulty: 4 },
{ question: 'What is 38 - 12', answer: '26', difficulty: 4 },
{ question: 'What is 29 + 14', answer: '43', difficulty: 4 },
{ question: 'What is 45 - 17', answer: '28', difficulty: 4 },
{ question: 'What is 32 + 19', answer: '51', difficulty: 4 },
{ question: 'What is 54 - 27', answer: '27', difficulty: 4 },
{ question: 'What is 47 + 23', answer: '70', difficulty: 4 },
{ question: 'What is 66 - 29', answer: '37', difficulty: 4 },
{ question: 'What is 58 + 35', answer: '93', difficulty: 4 },
{ question: 'What is 72 - 39', answer: '33', difficulty: 4 },
{ question: 'What is 84 ÷ 7 ', answer: '12', difficulty: 5 },
{ question: 'What is 126 ÷ 9', answer: '14', difficulty: 5 },
{ question: 'What is 63 ÷ 7', answer: '9', difficulty: 5 },
{ question: 'What is 144 ÷ 12', answer: '12', difficulty: 5 },
{ question: 'What is 98 ÷ 7', answer: '14', difficulty: 5 },
{ question: 'What is 132 ÷ 11', answer: '12', difficulty: 5 },
{ question: 'What is 175 ÷ 7', answer: '25', difficulty: 5 },
{ question: 'What is 210 ÷ 14', answer: '15', difficulty: 5 },
{ question: 'What is 180 ÷ 9', answer: '20', difficulty: 5 },
{ question: 'What is 252 ÷ 14', answer: '18', difficulty: 5 },
{ question: 'What is 3/4 + 1/2 ', answer: '5/4 or 1 1/4', difficulty: 6 },
{ question: 'What is 5/6 - 1/3', answer: '1/2', difficulty: 6 },
{ question: 'What is 2/5 × 3/4', answer: '3/10', difficulty: 6 },
{ question: 'What is 4/7 ÷ 2/3', answer: '6/7', difficulty: 6 },
{ question: 'What is 2 1/2 + 1 3/4', answer: '4 1/4 or 17/4', difficulty: 6 },
{ question: 'What is 3 2/3 - 2 1/2', answer: '1 1/6 or 7/6', difficulty: 6 },
{ question: 'What is 2 1/4 × 1 1/2', answer: '3 3/8 or 27/8', difficulty: 6 },
{ question: 'What is 5 3/8 ÷ 2 1/4', answer: '2 3/4 or 11/4', difficulty: 6 },
{ question: 'What is (3/5) * (2/3)', answer: '2/5', difficulty: 6 },
{ question: 'What is (7/8) ÷ (1/4)', answer: '7/2 or 3.5', difficulty: 6 },
{ question: 'Solve for x: 3x + 5 = 17', answer: 'x = 4', difficulty: 7 },
{ question: 'Solve for y: 2y - 8 = 14', answer: 'y = 11', difficulty: 7 },
{ question: 'Solve for x: 4(x - 3) = 20', answer: 'x = 8', difficulty: 7 },
{ question: 'Solve for y: 5(y + 2) = 35', answer: 'y = 7', difficulty: 7 },
{ question: 'Simplify: 3(x + 2) - 2(x - 4)', answer: 'x + 14', difficulty: 7 },
{ question: 'Simplify: 2(y - 5) + 3(2y + 1)', answer: '8y - 7', difficulty: 7 },
{ question: 'Solve for x: 2x/3 = 8', answer: 'x = 12', difficulty: 7 },
{ question: 'Solve for y: 3y/4 = 15', answer: 'y = 20', difficulty: 7 },
{ question: 'Simplify: 5(2x - 3) + 3(4x + 2)', answer: '22x - 9', difficulty: 7 },
{ question: 'Simplify: 4(3y + 2) - 2(2y - 1)', answer: '8y + 10', difficulty: 7 },
{ question: 'Solve for x: 2(x + 4) = 24', answer: 'x = 10', difficulty: 8 },
{ question: 'Solve for y: 3y - 7 = 5y + 1', answer: 'y = -6', difficulty: 8 },
{ question: 'Simplify: 2x^2 + 3x - 5x^2 + 7', answer: '-3x^2 + 3x + 7', difficulty: 8 },
{ question: 'Solve for x: 3(2x - 5) = 4(3x + 1)', answer: 'x = 2', difficulty: 8 },
{ question: 'Simplify: (4x^2 - 6x + 2) - (2x^2 + 3x - 1)', answer: '2x^2 - 9x + 3', difficulty: 8 },
{ question: 'Solve for y: 2(y + 3) = 5(y - 1)', answer: 'y = -7', difficulty: 8 },
{ question: 'Simplify: (3x - 2)(2x + 5)', answer: '6x^2 + 11x - 6', difficulty: 8 },
{ question: 'Solve for x: 3(x - 2) = 2(3x + 4)', answer: 'x = 4', difficulty: 8 },
{ question: 'Simplify: 2x(3x - 5) + 4x(2x + 1)', answer: '10x^2 - 9x - 6', difficulty: 8 },
{ question: 'Solve for y: 4(y - 1) = 2(3y + 5)', answer: 'y = 1/2', difficulty: 8 },
{ question: 'Solve for x: 2x^2 + 5x - 3 = 0', answer: 'x = 1/2 or 3', difficulty: 9 },
{ question: 'Factor: x^2 + 5x + 6', answer: '(x + 2)(x + 3)', difficulty: 9 },
{ question: 'Solve for x: (x - 3)(x + 4) = 0', answer: 'x = 3 or -4', difficulty: 9 },
{ question: 'Simplify: (2x - 3)(x + 5) - (x - 2)(3x + 4)', answer: 'x^2 - 8x + 13', difficulty: 9 },
{ question: 'Solve for x: x^2 - 4x + 3 = 0', answer: 'x = 1 or 3', difficulty: 9 },
{ question: 'Factor: x^2 - 9x + 14', answer: '(x - 7)(x - 2)', difficulty: 9 },
{ question: 'Solve for x: (x - 2)(x + 7) = 0', answer: 'x = 2 or -7', difficulty: 9 },
{ question: 'Simplify: (3x^2 + 5x - 2) - (2x^2 - 3x + 4)', answer: 'x^2 + 8x - 6', difficulty: 9 },
{ question: 'Solve for x: x^2 + 9x + 20 = 0', answer: 'x = -4 or -5', difficulty: 9 },
{ question: 'Factor: x^2 + 4x - 12', answer: '(x - 2)(x + 6)', difficulty: 9 },
{ question: 'Solve for x: 2x + 3 = 7', answer: 'x = 2', difficulty: 10 },
{ question: 'Factor: x^2 - 4x - 21', answer: '(x - 7)(x + 3)', difficulty: 10 },
{ question: 'Solve for x: x^2 + 5x + 6 = 0', answer: 'x = -2 or -3', difficulty: 10 },
{ question: 'Simplify: (3x^2 - 4x + 2) - (x^2 + 3x - 1)', answer: '-4x^2 + 7x + 3', difficulty: 10 },
{ question: 'Solve for x: 3(x - 2) = 2(x + 3)', answer: 'x = 5/2 or 2', difficulty: 10 },
{ question: 'Factor: 4x^2 - 25', answer: '(2x - 5)(2x + 5)', difficulty: 10 },
{ question: 'Solve for x: 5x^2 + 3x - 2 = 0', answer: 'x = 1/5 or -2', difficulty: 10 },
{ question: 'Simplify: (2x^2 + 3x + 1)(x^2 - 4x + 4)', answer: '2x^4 - 5x^3 - 13x^2 + 18x + 4', difficulty: 10 },
{ question: 'Solve for x: 2x^2 + 7x + 3 = 0', answer: 'x = -3 or -1/2', difficulty: 10 },
{ question: 'Factor: x^2 + 6x + 9', answer: '(x + 3)^2', difficulty: 10 },
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn'); // Get the restart button
const submitBtn = document.getElementById('submit-btn'); // Get the submit button
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let currentDifficulty = 1; // Start with difficulty level 1
let totalQuestions = 10; // Maximum of 10 questions

function displayQuestion() {
    // Filter questions from the question bank based on the current difficulty level
    const filteredQuestions = questionBank.filter(question => question.difficulty === currentDifficulty);
    // Get the current question from the filtered list of questions
    const currentQuestion = filteredQuestions[currentQuestionIndex % filteredQuestions.length];
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = `<p>${currentQuestion.question}</p>
                               <input type="text" id="answer">`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const currentQuestion = questionBank.filter(question => question.difficulty === currentDifficulty)[currentQuestionIndex % 10];
    if (userAnswer === currentQuestion.answer) {
        correctAnswers++;
        score += currentDifficulty;
        feedback.textContent = 'Correct!';
        if (correctAnswers % 1 === 0 && currentDifficulty < 10) {
            currentDifficulty += 2; // Increase difficulty by 2 for every correct answer
        }
    } else {
        feedback.textContent = 'Incorrect. Try again.';
    }
    scoreDisplay.textContent = `Score: ${score}`;
}

function getNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex === totalQuestions) {
        endQuiz(); // End quiz when maximum number of questions is reached
        return;
    }
    displayQuestion();
}

function endQuiz() {
    quizContainer.innerHTML = '';
    feedback.textContent = `Quiz completed! Your score is: ${score}`;
    restartBtn.style.display = 'block';
    submitBtn.style.display = 'none'; // Hide the submit button at the end of the quiz
}

startBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    currentDifficulty = 1; // Reset difficulty level
    displayQuestion();
    startBtn.style.display = 'none';
    restartBtn.style.display = 'none'; // Hide the restart button at the start
    submitBtn.style.display = 'block'; // Show the submit button at the start
    scoreDisplay.textContent = '';
});

restartBtn.addEventListener('click', () => { // Add event listener for restart button
    startBtn.click(); // Simulate a click on the start button to restart the quiz
});

submitBtn.addEventListener('click', () => { // Add event listener for submit button
    checkAnswer();
    getNextQuestion();
});

// Shuffle the question bank array to randomize the order of questions
questionBank.sort(() => Math.random() - 0.5);
