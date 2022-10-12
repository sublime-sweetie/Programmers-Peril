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

var resetButton = document.querySelector("#reset-button");
var button =document.querySelector("#game-button");
var quiz=document.querySelector("#quiz-question");
var choices=document.querySelector("#quiz-choices");
var userScore = 0;
var currentQuestionIndex=0;
// choices.innerHTML = '<button>my button</button>'

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
        userScore++
    }else{

    // decrease time
    generateQuestion()
    }

    
}

button.addEventListener("click", generateQuestion)
button.addEventListener("click", startTimer)


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        

        if (--timer < 1) {
            endGame;
        }
    }, 1000);
}

window.load = function() {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};



  
function endGame (){
    alert("Game Over! Your score is ", userScore)

    
  var highscore = localStorage.getItem("highscore");
  
  if(highscore !== null){
      if (userScore > highscore) {
        var winnerName
        prompt("Congrats! You've got the new highscore! Please type your initials!")
          localStorage.setItem("highscore", winnerName, userScore);      
      }
  }
  else{
      localStorage.setItem("highscore", winnerName, userScore);
  }
console.log(highscore,winnerName)
    };

function resetGame() {
    userScore=0;
    generateQuestion;
    
  }
  resetButton.addEventListener("click", resetGame);
