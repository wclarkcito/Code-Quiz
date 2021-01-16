//objects within array//
var quizQuestions = [
    
    question1 = {
        question: "Where were noodles invented?",
        possibilities: ["Italy", "Spain", "China", "Singapore"],
        correctAnswer: "China"
    },
    question2 = {
        question: "What country has the largest population?",
        possibilities: ['USA', 'France', 'China', "Russia"],
        correctAnswer: "China"
    },

];
var highScores = []
var submitButton = document.getElementById('startQuiz');
//header
var viewScore = document.getElementById("viewScore");
var timer = document.getElementById("timer");

// landing page
var mainPage = document.getElementById('mainpage-quiz');
/*
create variables based of IDs
*/

// quiz page
var quizPage = document.getElementById("questionpage-quiz");
/*
create variables based of IDs
*/

// final score page
var finalScorePage = document.getElementById("finalpage-quiz");
/*
create variables based of IDs
*/

//highscore page
var highscorePage = document.getElementById('highscorepage-quiz')
/*
create variables based of IDs
*/

var pageArray = [mainPage, quizPage, finalScorePage, highscorePage];

submitButton.addEventListener('click', startQuiz);


function hidePages() {
    for(var i = 0; i < pageArray.length; i++) {
        if(!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}

var quiz = false; //turning true when question display
var quizTime = 60;

var secondsLeft; //current number left of seconds
timer.textContent = "Time: " + quizTime;

var finalScore= 0;
var numberCorrect;
var numberIncorrect;
var questionIndex;

function questionOrder(arr) {
    var arrayIndex = [];
    for(var i = 0; i < arr.length; i++) {
        arrayIndex.push(i);
    }
    return arrayShuffle(arrayIndex);
}

function startQuiz() {
    alert("quiz started");
    numberIncorrect = 0;
    numberCorrect =0;

    quiz = true;
    questionIndex = 0;

    quizPage.classList.remove('hide');
}

function arrayShuffle(arr) {
    return arr.sort(() => Math.random() - .5);
}