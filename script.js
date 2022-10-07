var questions= [
    {
        question: "what is 2 + 2 equal to?",
        answers: [1,2,3,4],
        answer: 2
    },
    {
        question: "what is 2 - 2 equal to?",
        answers: [1,2,3,0],
        answer: 2
    },
    {
        question: "what is 2 + 2 equal to?",
        answers: [1,2,3,4],
        answer: 2
    },
    {
        question: "what is 2 / 2 equal to?",
        answers: [1,2,3,4],
        answer: 2
    }

]

var button =document.querySelector("#game-button");
var quiz=document.querySelector("quiz_question");
var choices=document.querySelector("quiz-choices");

var currentQuestionIndex=0;

function generateQuestion(){
    var currentQuestionIndex = questions[currentQuestionIndex]

}