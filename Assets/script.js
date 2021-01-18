

//objects within array//
var quizQuestions = [
    
    {
        question: "Where were noodles invented?",
        possibilities: ["Italy", "Spain", "China", "Singapore"],
        correctAnswer: "China"
    },
     {
        question: "What country has the largest population?",
        possibilities: ['USA', 'France', 'China', "Russia"],
        correctAnswer: "China"
    },
    {
        question: "What breed of dog has the most health problems?",
        possibilities: ["Doberman", "Golden Retriever", "Cocker Spaniel", "German Shephard"],
        correctAnswer: "Cocker Spaniel"
    },
    {
      
        question: "Where is the hottest recorded temperature on earth?",
        possibilities: ["Dallas, Tx", "Damascus, Syria", "Amman, Jordan", "Death Valley, Ca"],
        correctAnswer: "Death Valley, Ca"
    },

     {
        question: "what organized crime group is the most powerful in the world?",
        possibilities: ["Italian Mafia", "Mexican Cartel", "Japanese Mafia/Yakuza", "Russian Mafia"],
        correctAnswer: "Russian Mafia"
    },

     {
        question: "what is the most popular cereal in the world?",
        possibilities: ["Frosted Flakes", "Honey Nut Cheerios", "Corn Flakes", "Raisin Bran" ],
        correctAnswer: "Honey Nut Cheerios"
    },

     {
        question: "what is the worlds most popular beer?",
        possibilities: ["Budweiser", "Snow", "Corona", "Tsingtao"],
        correctAnswer: "Snow"
    },

     {
        question: "What is the most profitable industry in the world?",
        possibilities: ["Pharmaceuticals", "Tobacco", "Mining, Crude-Oil Production", "Food Consumer Products"],
        correctAnswer: "Mining, Crude-Oil Production"
    },

    {
        question: "What is the most expensive city in the world to live?",
        possibilities: ["Sydney, Australia", "Hong Kong", "Los Angeles, Ca","San Francisco, Ca"],
        correctAnswer: "Hong Kong"
    },


     {
        question: "What was the first country in the world?",
        possibilities: ["Greece", "Japan", "Egypt", "Ethiopia"],
        correctAnswer: "Ethiopia"
    },


];
var highScores = []
var submitButton = document.getElementById("startQuiz");
submitButton.addEventListener("click", e=>{
    startQuiz()
})
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
create variables based of IDs 1/18
*/
var quizQuestion = document.getElementById("questions");
var quizAnswers = document.getElementById("answers");
// final score page
var finalScorePage = document.getElementById("finalpage-quiz");
/*
create variables based of IDs 1/18
*/
var score = document.getElementById("display-score");

//highscore page
var highscorePage = document.getElementById('highscorepage-quiz')


/*
create variables based of IDs 1/18
*/
var highContainer = document.getElementById("highscore-container");
var goBackBtn = document.getElementById("go-back");

var pageArray = [mainPage, quizPage, finalScorePage, highscorePage];
//created function to list questions and the 
function generateQuestion(arr, index){
    quizQuestion.innerHTML=arr[index].question;
    quizAnswers.innerHTML="";
    arr[index].possibilities.forEach(element => {
    var listItem = document.createElement("li");
    listItem.innerHTML=element;
    listItem.addEventListener("click", e=>{
        console.log("answer clicked")
        
        var point = element === arr[index].correctAnswer? 1: 0;
        console.log(point)
        nextQuestion(point, index +1);
    }); 
    quizAnswers.appendChild(listItem);  
    });
}

function nextQuestion(point, index){
    score += point;
    generateQuestion(quizQuestions, index);
}
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
    generateQuestion(quizQuestions, 0);
}

function arrayShuffle(arr) {
    return arr.sort(() => Math.random() - .5);
}