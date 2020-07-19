$(document).ready(function () {

    // VARIABLES
    // Page Elements
    let directionsEl = document.querySelector("#directions");
    let timeEl = document.querySelector("#timer");
    let finalMessage = document.querySelector(".final-message");
    let userScore = document.querySelector("#score");
    let checkerEl = document.querySelector(".yay-nay");
    let highScoresEl = document.querySelector(".high-scores-list");
    let highScores = document.querySelector("#high-scores");
    let userInitials = document.querySelector("#initials-input");
    let questionToAsk = document.querySelector("#quiz-questions");
    let answerButtonEl = document.querySelector(".answer-button");
    let answerChoices = document.querySelectorAll(".answer");
    let currentQuestionIndex;

    // Buttons
    let highScoreButton = document.querySelector("#button-high-scores");
    let startButton = document.querySelector("#start-button");
    let backBtn = document.querySelector("#back-button");
    let clearButton = document.querySelector("#clear-button");

    // let currentQuestion;
    // let correctAnswer = document.querySelector("#got-it");
    // let wrongAnswer = document.querySelector("#nope");
    let scoreList = [];
    let timeLeft = 60;
    let startTimer;

    // QUIZ CONTENT
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

    // EVENT LISTENERS
    // for Start Button
    startButton.addEventListener("click", startQuiz);

    // for Answer Choices
    for (i = 0; i < answerChoices.length; i++) {
        answerChoices[i].addEventListener("click", checkAnswer);
    }

    // for High Scores Button
    highScoreButton.addEventListener("click", showHighScores);

    // for Back Button
    backBtn.addEventListener("click", setQuiz)

    // for Clear Button
    clearButton.addEventListener("click", clearHighScores)

    // FUNCTIONS
    // Reset the Quiz - when "Go Back" is clicked
    function setQuiz() {
        startButton.classList.remove("hide");
        highScoreButton.classList.remove("hide");
        directionsEl.classList.remove("hide");
        backBtn.classList.add("hide");
        highScoresEl.style.display = ("none");
    }

    // Start the Quiz
    function startQuiz() {
        startButton.classList.add("hide");
        directionsEl.classList.add("hide");
        questionToAsk.classList.remove("hide");
        answerButtonEl.classList.remove("hide");
        timeEl.classList.remove("hide");
        currentQuestionIndex = 0;
        setFirstQuestion();
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
            answerButtonEl.children[i].textContent = quizQuestions[currentQuestionIndex].answers[i];
        }
    }

    // Check Answers
    function checkAnswer(event) {

        event.preventDefault();

        checkerEl.style.display = "block";
        let p = document.createElement("p");
        checkerEl.append(p);

        setTimeout(function () {
            p.style.display = "none";
        }, 1000);

        if (event.target.textContent === quizQuestions[currentQuestionIndex].correctAnswer) {
            p.textContent = "Yay!";

        }
        else {
            timeLeft = timeLeft - 10;
            p.textContent = "Oooops!"

        }
        setTimeout(function () {
            setNextQuestion()
        }, 1000);
    }

    // Set the next question
    function setNextQuestion() {
        if (currentQuestionIndex < (quizQuestions.length - 1)) {
            currentQuestionIndex++;
            showQuestion(quizQuestions[currentQuestionIndex].question);
        }
        else {
            endScreen();
        }
    }

    // Timer function
    function runTimer() {
        startTimer = setInterval(function () {
            timeLeft--
            timeEl.innerHTML = timeLeft;
            if (timeLeft === 0 || currentQuestionIndex === (quizQuestions.length)) {
                endScreen();
            }
        }, 1000);
    }

    // Display when Quiz Ends
    function endScreen() {
        questionToAsk.classList.add("hide");
        answerButtonEl.classList.add("hide");
        timeEl.classList.add("hide");
        finalMessage.classList.remove("hide");
        userScore.textContent = timeLeft;
        clearInterval(startTimer);
    }

    // Store Scores
    function storeScores() {
        localStorage.setItem("scoreList", JSON.stringify(scoreList));
    }

    // Add Scores to the High Score List
    function addScores() {

        highScoresEl.style.display = "block";

        let init = userInitials.children[0].value.toUpperCase();
        scoreList.push({ initials: init, score: userScore.textContent });

        // sort scores
        scoreList = scoreList.sort((a, b) => {
            if (a.score < b.score) {
                return 1;
            } else {
                return -1;
            }
        });

        highScores.innerHTML = "";
        for (let i = 0; i < scoreList.length; i++) {
            let li = document.createElement("li");
            li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
            highScores.append(li);
        }
        storeScores();
    }

    // Display High Scores Page when "High Scores" is clicked
    function showHighScores() {
        addScores();
        highScoresEl.classList.remove("hide");
        backBtn.classList.remove("hide");
        clearButton.classList.remove("hide");
        highScoreButton.classList.add("hide");
        startButton.classList.add("hide");
        userScore.classList.add("hide");
        finalMessage.classList.add("hide");
        directionsEl.classList.add("hide");
    }

    // Clear High Scores
    function clearHighScores() {
        localStorage.clear;
        highScoresEl.innerHTML = "";
    }
});

// click clear scores button
    // clear the high scores array/object

