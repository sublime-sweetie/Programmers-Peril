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
var quiz=document.querySelector("#quiz-question");
var choices=document.querySelector("#quiz-choices");
// var startingQuestionIndex=0;
var currentQuestionIndex=0;
// choises.innerHTML = '<button>my button</button>'

function generateQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var h1Element = document.createElement("h1");
    quiz.innerHTML=""
    choices.innerHTML=""
    h1Element.textContent = currentQuestion.question;
    quiz.append(h1Element);

    for(var i = 0; i< currentQuestion.answers.length; i++){
        var liElement = document.createElement("li");
        var answerButton = document.createElement("button");
        answerButton.textContent = currentQuestion.answers[i];
        answerButton.addEventListener("click", validation)
        liElement.append(answerButton)
        choices.append(liElement);
    }
}

function validation(event){
    console.log(event.target)
    var usersChoice = event.target.textContent
    currentQuestionIndex++;

    if (usersChoice === questions[currentQuestionIndex].answer){
        generateQuestion()
    }else{

    // decrease time
    // display next question.
    generateQuestion()
    }
    // validating user's answer.
    // if it is correct
    // display next question.


    
}

button.addEventListener("click", generateQuestion)
// choices.addEventListener("click", checkA)












