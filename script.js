
// set global variables
let timeEl = document.querySelector("#timer");
let startButton = document.querySelector("#start-button");
const highScoreButton = document.querySelector("#button-high-score");
let userInitials = document.querySelector("#user-initials");
let questionToAsk = document.querySelector("#quiz-questions");
let answerButtonEl = document.querySelector(".answer-button");
let answerChoices = document.querySelectorAll(".answer");
const finalMessage = document.querySelector("#final-message");
let currentQuestionIndex;
let currentQuestion;
let userScore;

let timeLeft = 60;
let startTimer;


// Quiz questions taken from: https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
let quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: "<script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["the <head> section", "the <body> section", "the <mid> section", "either the <head> or the <body> section"],
        correctAnswer: "the <body> section"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')", "msg('Hello World')"],
        correctAnswer: "alert('Hello World')"
    },

    {
        question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: ["if(i!=5)", "if(i<>5)", "if i<>5", "if i=!5 then)"],
        correctAnswer: "if(i!=5)"

    },

];

// event listener for start button
startButton.addEventListener("click", startQuiz);

// event listener for answer choices
for (i = 0; i < answerChoices.length; i++) {
    answerChoices[i].addEventListener("click", checkAnswer);
}

// Start the Quiz
function startQuiz() {
    startButton.classList.add("hide");
    questionToAsk.classList.remove("hide");
    answerButtonEl.classList.remove("hide");
    currentQuestionIndex = 0;
    setFirstQuestion();
    console.log(quizQuestions[currentQuestionIndex].question);
    timeEl.innerHTML = timeLeft;
    runTimer();

}

// Set the first question
function setFirstQuestion() {
    showQuestion(quizQuestions[currentQuestionIndex].question);

}

// Show a question
function showQuestion(question) {
    questionToAsk.innerHTML = quizQuestions[currentQuestionIndex].question;
    for (i = 0; i < answerButtonEl.children.length; i++) {
        answerButtonEl.children[i].children[0].textContent = quizQuestions[currentQuestionIndex].answers[i];
    }
}

// Check Answers
function checkAnswer(event) {
    console.log(event.target.textContent);
    console.log(quizQuestions[currentQuestionIndex].correctAnswer);

    if (event.target.textContent === quizQuestions[currentQuestionIndex].correctAnswer) {
        console.log("Correct!");
        setNextQuestion();
    }
    else {
        console.log("Nope!");
        timeLeft = timeLeft - 10;
        setNextQuestion();
    }
}

// Set the next question
function setNextQuestion() {
    if (currentQuestionIndex < (quizQuestions.length - 1)) {
        currentQuestionIndex++;
        showQuestion(quizQuestions[currentQuestionIndex].question);

    }
    else {
        finalMessage.classList.remove("hide");
        questionToAsk.classList.add("hide");
        answerButtonEl.classList.add("hide");
        clearInterval(startTimer);
    }
}

// Timer function
function runTimer() {
    startTimer = setInterval(function() {
        timeLeft--
        timeEl.innerHTML = timeLeft;
        if (timeLeft === 0 || currentQuestionIndex === (quizQuestions.length)) { 
            questionToAsk.classList.add("hide");
            answerButtonEl.classList.add("hide");
            clearInterval(startTimer);
            userScore.textContent = timeLeft;
            console.log(userScore.textContent);

        }
    }, 1000);
}

// highScoreButton.addEventListener("click", function() {
//     if (timeEl.innerHTML > the current high score) {
//     }

//score
// user initials
// sections of the html document
    // how to use this quiz
    // questions
    // final message - quiz is done
    // div with correct/incorrect for each answer

// buttons
    // start
    // answer 1
    // answer 2
    // answer 3
    // answer 4 

// Object to compare quiz answer with user answer (true/false)

// Object for questions and answers

// Listening events
    // start quiz
        // go to question 1
        // show question 1
        // show answer options 1-4
    // start timer

// click answer 
    // if correct show Yay!
    // if incorrect show Boo!
    // if incorrect deduct 10 secs from time
    // set question next
        // set question
        // set answer options 1-4
        // loop through to last quesiton

// After last question OR timer = 0
    // stop timer
    // show final messag - quiz is done
    // store score/time to local storage

// Click submit to enter initials
    // show high score html page
    // add this score to high score object
    // High scores should be ordered from high to low

// click to go back to html.index/try again
    // land on intro/startup for quiz page

// click clear scores button
    // clear the high scores array/object

// click to view high scores from html.index
    // go to high score page

