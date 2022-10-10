let shuffledQuestions, currentQuestionIndex

const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('questions')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  shuffledQuestions = questions.sort(() => Math.random() - .5) 
  currentQuestionIndex = 0
  setNextQuestion()
}


function setNextQuestion() {
  resetState ()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
  const button = document.createElement("button")
  button.innerText = answer.text
  button.classList.add("button")
  if (answer.correct){
    button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonElement.appendChild(button)
  })
}

function resetState() {
  while (answerButtonElement.firstChild){
   answerButtonElement.removeChild(answerButtonElement.firstChild)
  }
}


function selectAnswer(e) {

}

const questions = [
  {
    question: "What is 2+2?",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ]
  }
]