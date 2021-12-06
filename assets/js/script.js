const headTitle = document.getElementById('header-section')
const nextButton = document.getElementById('next-btn')
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    startButton.classList.add('hide')
    headTitle.remove()
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
 function resetState() {
     clearStatusClass(document.body)
     nextButton.classList.add('hide')
     while (answerButtonsElement.firstChild) {
         answerButtonsElement.removeChild
         (answerButtonsElement.firstChild)
     }
 }

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
   nextButton.classList.remove('hide')
   } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
 }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: "What does 'DOM' stand for?",
        answers: [
            {text: 'Document Object Model', correct: true },
            {text: 'Direct Object Model', correct: false },
            {text: 'Dorian Object Manipulation', correct: false },
            {text: 'Disarray Obfuscation Method', correct: false }
        ],
        
        question: "What does CDN stand for?",
        answers: [
                {text: 'Central Distribution Network', correct: false},
                {text: 'Content Delivery Network', correct: true },
                {text: 'Content Distribution Network', correct: false },
                {text: 'Coordinated Delivery Network', correct: false }
        ],

        question: 'What does API stand for?',
        answers: [
                {text: 'All Positions Index', correct: false },
                {text: 'Application Programming Interface', correct: true },
                {text: 'Atypical Platform Interface', correct: false },
                {text: 'Actual Performance Index', correct: false }
        ],

        question: 'What does CSS stand for?',
        answers: [
                {text: 'Central Support Services', correct: false },
                {text: 'Central Solutions Service', correct: false },
                {text: 'Cascading Style Sheets', correct: true },
                {text: 'Concatenated Sentence Snippets', correct: false}
            
        ],

        question: 'Which git command creates a new folder?',
        answers: [
                {text: 'git branch', correct: false },
                {text: 'git checkout', correct: false },
                {text: 'mkdir', correct: true },
                {text: 'git commit -m', correct: false }
        ]
    }
]



var count=30;
var counter=setInterval(timer, 1000);
function timer() {
    count=count-1;
    if (count <= 0) {
        clearInterval(counter);
        return; 
    }
}




