// Define an array of objects containing questions with varying difficulties
const questions = [
    { question: 'What is 2 + 2?', answer: '4', difficulty: 1 },
    { question: 'What is 3 * 4?', answer: '12', difficulty: 2 },
    { question: 'What is 7 - 5?', answer: '2', difficulty: 3 },
    // Add more questions with increasing difficulties
];

let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = 1;
let shuffledQuestions = shuffle(questions); // Shuffled questions array

// Shuffle function to randomize the order of questions
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Function to display the current question
function displayQuestion(questionObj) {
    document.getElementById('question').innerText = questionObj.question;
}

// Function to handle submitting the answer
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    if (userAnswer === currentQuestion.answer) {
        score += currentDifficulty;
        document.getElementById('currentScore').innerText = score;
        currentQuestionIndex++;
        currentDifficulty = Math.min(currentDifficulty + 1, 10); // Increase difficulty for the next question (up to 10)
    } else {
        // If the answer is wrong, stay at the current difficulty level
        currentDifficulty = Math.max(currentDifficulty - 1, 1); // Decrease difficulty (down to 1)
    }

    // Display the next question or end the quiz if all questions are answered
    if (currentQuestionIndex < shuffledQuestions.length) {
        const nextQuestion = shuffledQuestions[currentQuestionIndex];
        displayQuestion(nextQuestion);
    } else {
        endQuiz();
    }
}

// Function to end the quiz and display the final score
function endQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('finalScore').innerText = score;
    document.getElementById('scoreSection').style.display = 'block';
}

// Attach submit event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', submitAnswer);

// Attach keydown event listener to the answer input field
document.getElementById('answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitAnswer();
    }
});

// Display the first question when the page loads
const firstQuestion = shuffledQuestions[currentQuestionIndex];
displayQuestion(firstQuestion);
