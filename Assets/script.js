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
    question3 = {
        question: "What breed of dog has the most health problems?",
        possibilities: ["Doberman", "Golden Retriever", "cocker Spaniel", "German Shephard"],
        correctAnswer: "c"
    },
{
    question4 = {
        question: "Where is the hottest recorded temperature on earth?",
        possibilities: ["Dallas, Tx", "Damascus, Syria", "Amman, Jordan", "Death Valley, Ca"],
        correctAnswer: "d"
},

    question5: {
        question: "what organized crime group is the most powerful in the world?",
        possibilities: ["Italian Mafia", "Mexican Cartel", "Japanese Mafia/Yakuza", "Russian Mafia"],
        correctAnswer: "d"
},

    question6: {
        question: "what is the most popular cereal in the world?",
        possibilities: ["Frosted Flakes", "Honey Nut Cheerios", "Corn Flakes", "Raisin Bran" ],
        correctAnswer: "b"
},

    question7: {
        question: "what is the worlds most popular beer?",
        possibilities: ["Budweiser", "Snow", "Corona", "Tsingtao"],
        correctAnswer: "b"
},

    question8: {
        question: "What is the most profitable industry in the world?",
        possibilities: ["Pharmaceuticals", "Tobacco", "Mining, Crude-Oil Production", "Food Consumer Products"],
        correctAnswer: "c"
},

    question9: {
        question: "What is the most expensive city in the world to live?",
        possibilities: ["Sydney, Australia", "Hong Kong", "Los Angeles, Ca","San Francisco, Ca"],
        correctAnswer: "b"
},


    question0: {
        question: "What was the first country in the world?",
        possibilities: ["Greece", "Japan", "Egypt", "Ethiopia"],
        correctAnswer: "d"
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
*/var start=document.getElementById("startQuiz");

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
timer.textContent = secondsLeft + "Time: " + quizTime;

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