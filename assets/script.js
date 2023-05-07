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
/** 10 questions, 4 html, 4 javascript, 2 css */



var startBtn = document.querySelector("#startBtn");
var countDown = document.querySelector("#timer");
var timer; 
var score = 0;
var resultText = document.querySelector("#finalScore");
var saveScore = document.querySelector("#saveScore");
saveScore.addEventListener("submit", saveScore);


var currentQuestion = 0;
// to keep track of which question user is on 
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
        countDown.innerText -= 10;
        if (countDown.innerText < 0) {
            countDown.innerText = 0;
        }
    } else score = score +1; 
    currentQuestion++;
    if (currentQuestion === quizQuestions.length || countDown.innerText == "0") {
        endQuiz();
    } else {
        showQuestion(quizQuestions[currentQuestion]);
    }
}



var choicesEl = document.querySelector("#answerChoices");

// start button triggers timer and first question
startBtn.addEventListener("click", startQuiz);


// start timer
function startTimer() {
    countDown.innerText = 100;
    timer = setInterval(function () {
        countDown.innerText--;
        if (countDown.innerText === 0) {
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
    // clear old choices
    choicesEl.innerHTML = "";
    question.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.innerText = choice;
        choiceBtn.onclick = questionClick;
        choicesEl.appendChild(choiceBtn);
    });
}




// end quiz
function endQuiz() {
    clearInterval(timer);
    questionCard.style.display = "none";
    // resultContainer.style.display = "block";
    resultText.innerText = score + " points!";
    resultText.style.display = "none"
    scoreCardContainer.style.display = "block";

}