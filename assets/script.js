/** ACCEPTANCE CRITERIA */
/** WHEN I click the start button
 * THEN a timer starts and I am presented with a question
 * WHEN I answer a question
 * THEN I am presented with another question 
 * WHEN I answer a question incorrectly 
 * THEN time is subtracted from the clock
 * WHEN all questions are answered or the timer reaches 0
 * THEN the game is over
 * WHEN the game is over
 * THEN I can save my initials and my score
*/



// var headerContainer = document.querySelector(".header")
// var startButton = document.querySelector(".startbtn")

// start quiz variables
var startBtn = document.querySelector("#startBtn");
var countDown = document.querySelector("#timer");


/** 10 questions, 4 html, 4 javascript, 2 css */
var quizQuestions = [
    {
        questionText: "What does the acronym CSS stand for?",
        choices: ["a. Changing Style Sheets", "b. Cascading Style Sheets", "c. Color Style Sheets", "d. Colorbook Style Sheets"],
        answer: "b. Cascading Style Sheets"
    },
    {
        questionText: "What does the acronym HTML stand for?",
        choices: ["a. HyperText Markup Language", "b. HighTest Markings Level", "c. HouseplantTree Mini Love", "d. HoroscopeTesting Manufactor Lab"],
        answer: "a. HyperText Markup Language",
    },
    {
        questionText: "JavaScript is the scripting language of Java?",
        choices: ["a. TRUE", "b. FALSE"],
        answer: "b.FALSE",
    },
    {
        questionText: "Does the acronym DOM stand for Document Object Model?",
        choices: ["a TRUE", "b. FALSE"],
        answer: "a. TRUE",
    },
    {
        questionText: "Where do you put your JavaScript code?",
        choices: ["a. <head>", "b. <title>", "c. <script>", "d. <body>"],
        answer: "c. <script>"
    },
    {
        questionText: "What is the largest header in HTML by default?",
        choices: ["a. h6", "b. h4", "c. h2", "d. h1"],
        answer: "d. h1"
    },
    {
        questionText: "An array is a special type of boolean in Javascript that can hold more than one value?",
        choices: ["a. TRUE", "b. FALSE"],
        answer: "b. FALSE",
    },
    {
        questionText: "Which attribute allows an image link to show a text label if the image cannot be displayed?",
        choices: ["a. src", "b. alt", "c. lang", "d. title"],
        answer: "b. alt",
    },
    {
        questionText: "Which one of these is not used to declare a JavaScript variable?",
        choices: ["a. var", "b. const", "c. for", "d. let"],
        answer: "c. for",
    },
    {
        questionText: "What property is used to change the background color in CSS?",
        choices: ["a. background-color", "b. color-background", "c. color-space", "d. color-choice"],
        answer: "a. background-color",
    },
]

function questionClick() {
    if (this.value !== quizQuestions[currentQuestion].answer) {
        countDown -= 10;
        if (countDown < 0) {
            countDown = 0;
        }
        countDown.innerText = countDown;
    }
    currentQuestion++;
    if (currentQuestion === quizQuestions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }
}

var choicesEl = document.querySelector("#answerChoices");

// start button triggers timer and first question
startBtn.addEventListener("click", startQuiz);


// start timer
function startTimer() {
    countDown.innerText = 100;
    var timer = setInterval(function () {
        countDown.innerText--;
        if (countDown.innerText === 0) {
            clearInterval(timeInterval);
            endQuiz();}
    }, 1000);
};

// Start quiz
function startQuiz() {
    starterContainer.style.display = "none";
    questionCard.style.display = "block";
    startTimer();
    showQuestion(quizQuestions[0]);
};

// show questions and choices
function showQuestion(question) {
    questionText.innerText = question.questionText;
    question.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.innerText = choice;
        choiceBtn.onclick = questionClick;
        choicesEl.appendChild(choiceBtn);
    });
}

// next question
function nextQuestion() {
    showQuestion(quizQuestions[currentQuestion]);
}



// question varaibles 
// var questionCard = document.getElementById("questionCard");
// var quizQuestion = document.querySelector("questionText");
// var choiceA = document.getElementById("choice0");
// var choiceB = document.getElementById("choice1");
// var choiceC = document.getElementById("choice2");
// var choiceD = document.getElementById("choice3");


// start quiz and hide cards
// function startQuiz() {
//     hideCards();
//     questionCard.removeAttribute("hidden");

//     firstQuestion = 0;
//     showQuestion();
// }

// show questions and choices
// function showQuestion() {
//     let question = questions[firstQuestion];
//     let choices =question.choices;
// }