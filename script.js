const questions = [
    {
        question: "Which is larget animal in the worid?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },

    {
        question: "Which is smallest animal in the world?",
        answers: [
            {text: "Paedophryne amauensis Frog", correct: true},
            {text: "Etruscan Shrew", correct: false},
            {text: "Paedocypris progenetica Fish", correct: false},
            {text: "Kitti's Hog-Nose Bat", correct: false},
        ]
    },

    {
        question: "What is the world largest city?",
        answers: [
            {text: "Mexico City, Mexico", correct: false},
            {text: "Shanghai, China", correct: false},
            {text: "Delhi, India", correct: false},
            {text: "Tokyo, Japan", correct: true},
        ]
    },

    {
        question: "Which is the 1 largest city in India?",
        answers: [
            {text: "Bangalore", correct: false},
            {text: "Visakhapatnam", correct: false},
            {text: "Delhi", correct: true},
            {text: "Hyderabad", correct: false},
        ]
    },

    {
        question: "What is the largest city in Asia?",
        answers: [
            {text: "Delhi", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Shanghai", correct: false},
            {text: "Beijing", correct: false},
        ]
    },

    {
        question: "Which is Asia's fastest growing city?",
        answers: [
            {text: "Shanghai", correct: false},
            {text: "Dhaka", correct: false},
            {text: "Delhi", correct: true},
            {text: "Beijing", correct: false},
        ]
    },

    {
        question: "How many countries in Asia?",
        answers: [
            {text: "48", correct: true},
            {text: "47", correct: false},
            {text: "46", correct: false},
            {text: "45", correct: false},
        ]
    },

    {
        question: "How many countries are in the world?",
        answers: [
            {text: "192", correct: false},
            {text: "193", correct: true},
            {text: "194", correct: false},
            {text: "195", correct: false},
        ]
    },

    {
        question: "Which is the richest state in India?",
        answers: [
            {text: "West Bengal", correct: false},
            {text: "Chennai", correct: false},
            {text: "Delhi", correct: false},
            {text: "Maharashtra", correct: true},
        ]
    },

    {
        question: "Which state is educated in India?",
        answers: [
            {text: "West Bengal", correct: false},
            {text: "Kerala", correct: true},
            {text: "patna", correct: false},
            {text: "Maharashtra", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
        const selectedBtn  = e.target;
        const isCorrect  = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct ==="true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();