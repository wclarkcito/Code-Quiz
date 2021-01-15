var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


submitButton.addEventListener('click', showResults);

var quizQuestions =[{

        question: "Where were noodles invented?",
        possibilities: {
            a: "Italy",
            b: "Spain",
            c: "China",
            d: "Japan"
        },
    correctAnswer: "c"
    },
    {
        question: "What country has the largest population?",
        possibilities: {
            a: "India",
            b: "China",
            c: "USA",
            d: "South America"
    },
    correctAnswer: "b"
    },
    {
        question: "What breed of dog has the most health problems?",
        possibilities: {
            a: "Doberman",
            b: "Golden Retriever",
            c: "cocker Spaniel",
            d: "German Shephard"
    },
    correctAnswer: "c"
    },
    {
        question: "Where is the hottest recorded temperature on earth?",
        possibilities: {
            a: "Dallas, Tx",
            b: "Damascus, Syria",
            c: "Amman, Jordan",
            d: "Death Valley, Ca"
    },
    correctAnswer: "d"
    },
    {
        question: "what organized crime group is the most powerful in the world",
        possibilities:{
            a: "Italian Mafia",
            b: "Mexican Cartel",
            c: "Japanese Mafia/Yakuza",
            d: "Russian Mafia"
    },
    correctAnswer: "d"
    },
    {
        question: "what is the most popular cereal in the world",
        possibilities:{
            a: "Frosted Flakes",
            b: "Honey Nut Cheerios",
            c: "Corn Flakes",
            d: "Raisin Bran"
    },
    correctAnswer: "b"
    },

    {
        question: "what is the worlds most popular beer",
        possibilities:{
            a: "Budweiser",
            b: "Snow",
            c: "Corona",
            d: "Tsingtao"
    },
        correctAnswer: "b"
    },
    {
        question: "What is the most profitable industry in the world?",
        possibilities:{
            a: "Pharmaceuticals",
            b: "Tobacco",
            c: "Mining, Crude-Oil Production",
            d: "Food Consumer Products"
    },
    correctAnswer: "c"
    },
    {
        question: "What is the most expensive city in the world to live?",
        possibilities:{
            a: "Sydney, Australia",
            b: "Hong Kong",
            c: "Los Angeles, Ca",
            d: "San Francisco, Ca"

        },
        correctAnswer: "b"
    },

    {
        question: "What was the first country in the world?",
        possibilities:{
            a: "Greece",
            b: "Japan",
            c: "Egypt",
            d: "Ethiopia"
        },
        correctAnswer: "d"
    },




}];