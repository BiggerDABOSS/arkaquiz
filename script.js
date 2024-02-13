const questionBank = [
    { question: 'What is 2 + 2 ', answer: '4', difficulty: 1 },
    { question: 'What is 3 + 5', answer: '8', difficulty: 1 },
    { question: 'What is 6 - 3', answer: '3', difficulty: 1 },
    { question: 'What is 7 + 4', answer: '11', difficulty: 1 },
    { question: 'What is 9 - 5', answer: '4', difficulty: 1 },
    { question: 'What is 8 + 6', answer: '14', difficulty: 1 },
    { question: 'What is 10 - 2', answer: '8', difficulty: 1 },
    { question: 'What is 10 + 9', answer: '24', difficulty: 1 },
    { question: 'What is 10 - 7', answer: '13', difficulty: 1 },
    { question: 'What is 11 + 3', answer: '21', difficulty: 1 },
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
    { question: 'What is 12 x 7 ', answer: '19', difficulty: 3 },
    { question: 'What is 15 x 6', answer: '9', difficulty: 3 },
    { question: 'What is 9 x 8', answer: '17', difficulty: 3 },
    { question: 'What is 14 x 5', answer: '9', difficulty: 3 },
    { question: 'What is 11 x 6', answer: '17', difficulty: 3 },
    { question: 'What is 16 x 7', answer: '9', difficulty: 3 },
    { question: 'What is 13 x 9', answer: '22', difficulty: 3 },
    { question: 'What is 17 x 8', answer: '9', difficulty: 3 },
    { question: 'What is 10 x 11', answer: '21', difficulty: 3 },
    { question: 'What is 19 x 9', answer: '10', difficulty: 3 },
    { question: 'What is 84 ÷ 7 ', answer: '12', difficulty: 4 },
    { question: 'What is 126 ÷ 9', answer: '14', difficulty: 4 },
    { question: 'What is 63 ÷ 7', answer: '9', difficulty: 4 },
    { question: 'What is 144 ÷ 12', answer: '12', difficulty: 4 },
    { question: 'What is 98 ÷ 7', answer: '14', difficulty: 4 },
    { question: 'What is 132 ÷ 11', answer: '12', difficulty: 4 },
    { question: 'What is 175 ÷ 7', answer: '25', difficulty: 4 },
    { question: 'What is 210 ÷ 14', answer: '15', difficulty: 4 },
    { question: 'What is 180 ÷ 9', answer: '20', difficulty: 4 },
    { question: 'What is 252 ÷ 14', answer: '18', difficulty: 4 },
    { question: 'What is 264 + 940', answer: '1204', difficulty: 5 },
    { question: 'What is 128 + 189', answer: '317', difficulty: 5 },
    { question: 'What is 630 + 612', answer: '1242', difficulty: 5 },
    { question: 'What is 681 + 885', answer: '1566', difficulty: 5 },
    { question: 'What is 923 + 596, answer: 1082’, difficulty: 5 },
    { question: 'What is 837 + 701', answer: '1538', difficulty: 5 },
    { question: 'What is 848 + 161', answer: '1009', difficulty: 5 },
    { question: 'What is 940 + 768', answer: '1708', difficulty: 5 },
    { question: 'What is 821 + 701', answer: '1522', difficulty: 5 },
    { question: 'What is 791 + 986', answer: '1777', difficulty: 5 },
    { question: 'What is 19 x 24', answer: '456', difficulty: 6 },
    { question: 'What is 22 x 28', answer: '616', difficulty: 6 },
    { question: 'What is 25 x 31', answer: '775', difficulty: 6 },
    { question: 'What is 28 x 29', answer: '812', difficulty: 6 },
    { question: 'What is 31 x 34', answer: '1054', difficulty: 6 },
    { question: 'What is 34 x 36', answer: '1224', difficulty: 6 },
    { question: 'What is 37 x 39', answer: '1443', difficulty: 6 },
    { question: 'What is 40 x 42', answer: '1680', difficulty: 6 },
    { question: 'What is 43 x 45', answer: '1935', difficulty: 6 },
    { question: 'What is 46 x 48', answer: '2208', difficulty: 6 },
    { question: 'What is 98 ÷ 7', answer: '14', difficulty: 7 },
    { question: 'What is 126 ÷ 9', answer: '14', difficulty: 7 },
    { question: 'What is 144 ÷ 12', answer: '12', difficulty: 7 },
    { question: 'What is 168 ÷ 14', answer: '12', difficulty: 7 },
    { question: 'What is 180 ÷ 15', answer: '12', difficulty: 7 },
    { question: 'What is 210 ÷ 15', answer: '14', difficulty: 7 },
    { question: 'What is 252 ÷ 18', answer: '14', difficulty: 7 },
    { question: 'What is 288 ÷ 24', answer: '12', difficulty: 7 },
    { question: 'What is 308 ÷ 22', answer: '14', difficulty: 7 },
    { question: 'What is 360 ÷ 25', answer: '14', difficulty: 7 },
    { question: 'What is 32 x 17 x 3', answer: '1632', difficulty: 8 },
    { question: 'What is 39 x 25 x 2', answer: '1950', difficulty: 8 },
    { question: 'What is 42 x 38 x 2', answer: '3192', difficulty: 8 },
    { question: 'What is 63 x 44 x 3', answer: '8316', difficulty: 8 },
    { question: 'What is 78 x 57 x 2', answer: '8892', difficulty: 8 },
    { question: 'What is 91 x 66 x 3', answer: '18018', difficulty: 8 },
    { question: 'What is 104 x 75 x 2', answer: '15600', difficulty: 8 },
    { question: 'What is 117 x 84 x 3', answer: '29556', difficulty: 8 },
    { question: 'What is 130 x 93 x 2', answer: '24180', difficulty: 8 },
    { question: 'What is 143 x 102 x 3', answer: '43758', difficulty: 8 },
    { question: 'What is 49 x 24 x 7', answer: '8232', difficulty: 9 },
    { question: 'What is 54 x 32 x 8', answer: '13824', difficulty: 9 },
    { question: 'What is 61 x 36 x 6', answer: '13176', difficulty: 9 },
    { question: 'What is 67 x 42 x 5', answer: '14070', difficulty: 9 },
    { question: 'What is 74 x 49 x 4', answer: '14404', difficulty: 9 },
    { question: 'What is 81 x 56 x 3', answer: '13608', difficulty: 9 },
    { question: 'What is 89 x 63 x 3', answer: '16767', difficulty: 9 },
    { question: 'What is 98 x 70 x 3', answer: '20580', difficulty: 9 },
    { question: 'What is 108 x 77 x 3', answer: '24948', difficulty: 9 },
    { question: 'What is 119 x 84 x 3', answer: '29964', difficulty: 9 },
    { question: 'What is 55 x 40 x 5 x 5', answer: '5500', difficulty: 10 },
    { question: 'What is 63 x 48 x 6 x 4', answer: '36288', difficulty: 10 },
    { question: 'What is 72 x 56 x 5 x 4', answer: '8064', difficulty: 10 },
    { question: 'What is 84 x 64 x 4 x 3', answer: '32256', difficulty: 10 },
    { question: 'What is 96 x 72 x 3 x 2', answer: '41472', difficulty: 10 },
    { question: 'What is 108 x 81 x 3 x 2', answer: '52488', difficulty: 10 },
    { question: 'What is 120 x 90 x 4 x 2', answer: '86400', difficulty: 10 },
    { question: 'What is 132 x 99 x 3 x 2', answer: '65340', difficulty: 10 },
    { question: 'What is 144 x 108 x 3 x 2', answer: '93312', difficulty: 10 },
    { question: 'What is 156 x 117 x 4 x 2', answer: '92448', difficulty: 10 },
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

// Function to display the next question
function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        endQuiz(); // End quiz when all questions have been answered
    }
}

// Function to display the current question
function displayQuestion() {
    // Filter questions from the question bank based on the current difficulty level
    const filteredQuestions = questionBank.filter(question => question.difficulty === currentDifficulty);
    // Get the current question from the filtered list of questions
    const currentQuestion = filteredQuestions[currentQuestionIndex % filteredQuestions.length];
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = `<p>${currentQuestion.question}</p>
                               <input type="text" id="answer">`;
}

// Function to check the answer
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

// Function to end the quiz
function endQuiz() {
    quizContainer.innerHTML = '';
    feedback.textContent = `Quiz completed! Your score is: ${score}`;
    restartBtn.style.display = 'block';
    submitBtn.style.display = 'none'; // Hide the submit button at the end of the quiz
}

// Event listener for the "Start Quiz" button
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

// Event listener for the "Restart Quiz" button
restartBtn.addEventListener('click', () => { 
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    currentDifficulty = 1; // Reset difficulty level
    displayQuestion();
    restartBtn.style.display = 'none'; // Hide the restart button after clicking
    submitBtn.style.display = 'block'; // Show the submit button after clicking
});

// Event listener for the "Submit Answer" button
submitBtn.addEventListener('click', () => {
    checkAnswer();
    displayNextQuestion(); // Call function to display the next question
});

// Shuffle the question bank array to randomize the order of questions
questionBank.sort(() => Math.random() - 0.5);
