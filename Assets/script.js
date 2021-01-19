

//objects within array//
var timer;
var quizQuestions = [
    
    {
        question: "Where were noodles invented?",
        possibilities: ["Italy", "Spain", "China", "Singapore"],
        correctAnswer: "China"
    },
     {
        question: "What country has the largest population?",
        possibilities: ['USA', 'India', 'China', "Russia"],
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

var timerDisplay = document.getElementById("timer");

// landing page
var mainPage = document.getElementById('mainpage-quiz');

// quiz page
var quizPage = document.getElementById("questionpage-quiz");
/*
create variables based of IDs 
*/
var quizQuestion = document.getElementById("questions");
var quizAnswers = document.getElementById("answers");
// final score page
var finalScorePage = document.getElementById("finalpage-quiz");
/*
create variables based of IDs 
*/
var displayScore = document.getElementById("display-score");
var score=0;
//highscore page
var highscorePage = document.getElementById('highscorepage-quiz')

var highContainer = document.getElementById("highscore-container");
var goBackBtn = document.getElementById("go-back");

var pageArray = [mainPage, quizPage, finalScorePage, highscorePage];


//created function to list and answer questions
function generateQuestion(arr, index){
    quizQuestion.innerHTML=arr[index].question;
    quizAnswers.innerHTML="";
    arr[index].possibilities.forEach(element => {
    let listItem = document.createElement("li");
    listItem.innerHTML=element;
    listItem.addEventListener("click", e=>{
        console.log("answer clicked")
        
        let point = element === arr[index].correctAnswer? 1: 0;
        console.log(point)
        nextQuestion(point, index +1);
    }); 
    quizAnswers.appendChild(listItem);  
    });
}
//enumerates correct answers
function nextQuestion(point, index){
    score += point;
    if(index === quizQuestions.length){
        quiz = false;
        endGame()
        clearInterval(timer);
    }else{
        generateQuestion(quizQuestions, index);
        
    }
    
}

function endGame(){
    hidePages();
    finalScorePage.classList.remove("hide")
    displayScore.innerHTML=score;
    let button = document.createElement("button");
    button.innerText = "start new quiz";
    button.addEventListener("click", e=> startQuiz());
    finalScorePage.appendChild(button);
}
function hidePages() {
    for(var i = 0; i < pageArray.length; i++) {
        if(!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}

//Timer Function
var quiz = false; 
function startTimer(flag){
    if(!quiz){
    var timeLeft = 60;
     timer = setInterval(function(){
        timeLeft--;
        timerDisplay.innerHTML=timeLeft;
        if(timeLeft <= 0 ){
            clearInterval(timer);
            endGame()
        }

    }, 1000)}
    
}

var quizTime = 60;

var secondsLeft; //current number left of seconds
timerDisplay.textContent = secondsLeft + "Time: " + quizTime;

var questionIndex;

function questionOrder(arr) {
    var arrayIndex = [];
    for(var i = 0; i < arr.length; i++) {
        arrayIndex.push(i);
    }
    return arrayShuffle(arrayIndex);
}

function startQuiz() {
    startTimer(true)
    alert("quiz started");
    score = 0;

    quiz = true;
    questionIndex = 0;

    quizPage.classList.remove('hide');
    generateQuestion(quizQuestions, 0);
}

function arrayShuffle(arr) {
    return arr.sort(() => Math.random() - .5);
}