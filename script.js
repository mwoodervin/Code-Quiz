// STEPS FOR JS FILE

// set variables for time : let timeEl = 
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

let startTime = 60;


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

let answerKey = ["a", "b", "c", "a"];

// event listener for start button
startButton.addEventListener("click", startQuiz);

// event listener for answer choices
for (i = 0; i < answerChoices.length; i++) {
    answerChoices[i].addEventListener("click", checkAnswer);
}


function checkAnswer(event) {
    console.log(event.target.textContent);
    console.log(quizQuestions[currentQuestionIndex].correctAnswer);

    if (event.target.textContent === quizQuestions[currentQuestionIndex].correctAnswer) {
        console.log("Correct!");
        setNextQuestion();
    }
    else {
        console.log("Nope!");
        startTime = startTime - 10;
        setNextQuestion();

    }
}


function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    questionToAsk.classList.remove("hide");
    console.log(answerButtonEl);
    answerButtonEl.classList.remove("hide");
    currentQuestionIndex = 0;
    setFirstQuestion();
    console.log(currentQuestionIndex);
    console.log(quizQuestions[currentQuestionIndex].question);
    timeEl.innerHTML = startTime;
    runTimer();

}

function setFirstQuestion() {
    showQuestion(quizQuestions[currentQuestionIndex].question);

}

function showQuestion(question) {
    questionToAsk.innerHTML = quizQuestions[currentQuestionIndex].question;
    console.log(answerButtonEl.children.length);
    for (i = 0; i < answerButtonEl.children.length; i++) {
        answerButtonEl.children[i].children[0].textContent = quizQuestions[currentQuestionIndex].answers[i];
    }

}




function setNextQuestion() {
    if (currentQuestionIndex < (quizQuestions.length - 1) && startTime > 0) {
        currentQuestionIndex++;
        showQuestion(quizQuestions[currentQuestionIndex].question);

    }
    else {
        finalMessage.classList.remove("hide");
        questionToAsk.classList.add("hide");
        answerButtonEl.classList.add("hide");
    }
}


function runTimer() {
    var startTimer = setInterval(function () {
        startTime--
        timeEl.innerHTML = startTime;
        if (startTime === 0) {
            finalMessage.classList.remove("hide");
            questionToAsk.classList.add("hide");
            answerButtonEl.classList.add("hide");
            clearInterval(startTimer);
        }
    }, 1000);
}

// highScoreButton.addEventListener("click", function() {
//     if (timeEl.innerHTML) {
//       mode = "light";
//       container.setAttribute("class", "light");
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

