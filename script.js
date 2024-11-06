const questions=[
    {question: 
        'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        answer:[
            {text:'boolean',correct:false},
            {text:'object',correct:true},
            {text:'array',correct:false},
            {text:'undefined',correct:false}
        ]
    },{
        question:"Which function is used to serialize an object into a JSON string in Javascript?",
        answer:[
            {text:'stringify',correct:true},
            {text:'parse',correct:false},
            {text:'convert',correct:false},
            {text:'none of above',correct:false}
        ]

    },{
        question:"Which object in Javascript doesn’t have a prototype?",
        answer:[
            {text:'base object',correct:true},
            {text:'all object have prototype',correct:false},
            {text:'none have prototype',correct:false},
            {text:'none of above',correct:false}
        ]

    },{
        question:"Which of the following are closures in Javascript?",
        answer:[
            {text:'variables',correct:false},
            {text:'functions',correct:true},
            {text:'object',correct:false},
            {text:'arrays',correct:false}
        ]

    },{
        question:"Which of the following are not server-side Javascript objects?",
        answer:[
            {text:'function',correct:false},
            {text:'date',correct:false},
            {text:'fileUpload',correct:false},
            {text:'all of above',correct:true}
        ]

    },{
        question:"Which of the following is not a Javascript framework?",
        answer:[
            {text:'react',correct:false},
            {text:'vue',correct:false},
            {text:'node',correct:false},
            {text:'cassandra',correct:true}
        ]

    },{
        question:"How do we write a comment in javascript?",
        answer:[
            {text:'//',correct:true},
            {text:'{//}',correct:false},
            {text:'#',correct:false},
            {text:'**',correct:false}
        ]

    }
]


let questionelem=document.getElementById("question")
let ansButtons=document.getElementById("answer-buttons")
let nextBtn=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionelem.innerHTML=questionNumber+'.'+currentQuestion.question

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add('btn');
        ansButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
    })
}


function resetState() {
    nextBtn.style.display = 'none';
    while (ansButtons.firstChild) {
        ansButtons.removeChild(ansButtons.firstChild);
    }
}


function selectAnswer(e){
const selectBtn=e.target
const isCorrect=selectBtn.dataset.correct==='true'
if(isCorrect==true){
    selectBtn.classList.add('correct')
    score++;
}else{
    selectBtn.classList.add('incorrect')
}
Array.from(ansButtons.children).forEach(button=>{
if(button.dataset.correct==='true'){
    button.classList.add("correct")
}
button.disabled=true;

})
nextBtn.style.display='block'

}

function showScore(){
    resetState()
    questionelem.innerHTML=`your score is ${score} out of ${questions.length}!`
    nextBtn.innerHTML='play again'
    nextBtn.style.display='block'
}
function handleNextBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})


startQuiz()