// STEPS FOR JS FILE

// set variables for time : let timeEl = 
const timeEl = document.querySelector("#timer");
let startButton = document.querySelector("#start-button");
const highScoreButton = document.querySelector("#button-high-score");
let userInitials = document.querySelector("#user-initials");
let questionToAsk = document.querySelector("#quiz-questions");
let answerButtonEl = document.querySelector("#answer-button");
const finalMessage = document.querySelector("#final-message");
let currentQuestionIndex;
let currentQuestion;

let startTime = 45;
// Quiz questions taken from: https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
let quizQuestions = [
    {question: "Inside which HTML element do we put the JavaScript?", 
      answers: ["<script>", "<javascript>", "<js>", "<scripting>"] 
    }

    // {question: "Where is the correct place to insert a JavaScript?", 
    //   choice1: "the <head> section",
    //   choice2: "the <body> section",
    //   choice3: "the <mid> section",
    //   choice4: "either the <head> or the <body> section"
    // },
    // {question: "How do you write 'Hello World' in an alert box?", 
    //   choice1: "alertBox('Hello World')",
    //   choice2: "msgBox('Hello World')",
    //   choice3: "alert('Hello World')",
    //   choice4: "msg('Hello World')"
    // },
    // {question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?", 
    //   choice1: "if(i!=5)",
    //   choice2: "if(i<>5)",
    //   choice3: "if i<>5",
    //   choice4: "if i=!5 then)"
    // },
    
    ];

let answerKey = ["a", "b", "c", "a"];


startButton.addEventListener("click", startQuiz);



function startQuiz (){
console.log("Started");
startButton.classList.add("hide");
questionToAsk.classList.remove("hide");
answerButtonEl.classList.remove("hide");
currentQuestionIndex = 0;
setNextQuestion();
console.log(currentQuestionIndex);
console.log(quizQuestions[currentQuestionIndex].question);
}

function setNextQuestion() {
    showQuestion(quizQuestions[currentQuestionIndex].question);

}

function showQuestion(question) {
    questionToAsk.innerHTML = quizQuestions[currentQuestionIndex].question;
    answerButtonEl.innerHTML = quizQuestions[currentQuestionIndex].answers;
}
 



// function setNextQuestion (){




// }


// function startTimer() {
//     timeEl.innerHTML = startTime;
//     console.log(timeEl);
//     if (timeEl > 0) {
//         timeEl--;
//     }
//     else {
//         console.log(startTime);
//         console.log("Time's up!");
//     }
// }

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
    // answer 5

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

