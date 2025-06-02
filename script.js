let questions = [
    {
        "question": "wer hat HTML erfunden0",
        "answers_1": "Robby Williams0",
        "answers_2": "Lady Gaga0",
        "answers_3": "Tim Berners Lee0",
        "answers_4": "Justin Bieber0",
        "right_answers": 1
    },
    {
        "question": "wer hat HTML erfunden1",
        "answers_1": "Robby Williams1",
        "answers_2": "Lady Gaga1",
        "answers_3": "Tim Berners Lee1",
        "answers_4": "Justin Bieber1",
        "right_answers": 2
    },
    {
        "question": "wer hat HTML erfunden2",
        "answers_1": "Robby Williams2",
        "answers_2": "Lady Gaga2",
        "answers_3": "Tim Berners Lee2",
        "answers_4": "Justin Bieber2",
        "right_answers": 3
    },
    {
        "question": "wer hat HTML erfunden3",
        "answers_1": "Robby Williams3",
        "answers_2": "Lady Gaga3",
        "answers_3": "Tim Berners Lee3",
        "answers_4": "Justin Bieber3",
        "right_answers": 4
    },
    {
        "question": "wer hat HTML erfunden4",
        "answers_1": "Robby Williams4",
        "answers_2": "Lady Gaga4",
        "answers_3": "Tim Berners Lee4",
        "answers_4": "Justin Bieber4",
        "right_answers": 2
    },
    {
        "question": "wer hat HTML erfunden5",
        "answers_1": "Robby Williams5",
        "answers_2": "Lady Gaga5",
        "answers_3": "Tim Berners Lee5",
        "answers_4": "Justin Bieber5 ",
        "right_answers": 1
    },
];

let trueAnswerSum =  0;
let falseAnswerSum = 0;
let currentQuestions = 0;

function init() {
    showQuestionsLength();
    showCurrentsQuestions();
    showCurrentAnswers();
    disableBtn();
}

function showQuestionsLength() {
    let allQuestions = document.getElementById('allQuestions')
    allQuestions.innerHTML = questions.length;
}

function showCurrentsQuestions() {
    if (currentQuestions >= questions.length) {
        endScreenActive();
    } else {
        let question =  questions[currentQuestions];
        let questionContainer = document.getElementById('cardTitle');
        questionContainer.innerHTML = question.question;
    }

}


function showCurrentAnswers() {
     if (currentQuestions >= questions.length) {
        endScreenActive();
    } else {
        let question =  questions[currentQuestions];
        let answer1 = document.getElementById('answer_1');
        let answer2 = document.getElementById('answer_2');
        let answer3 = document.getElementById('answer_3');
        let answer4 = document.getElementById('answer_4');
        answer1.innerHTML = question.answers_1
        answer2.innerHTML = question.answers_2
        answer3.innerHTML = question.answers_3
        answer4.innerHTML = question.answers_4
    }
}


function nextQuestion() {
  if (trueAnswerSum === 1) {
        currentQuestions = (currentQuestions + 1);
        showCurrentsQuestions();
        showCurrentAnswers();
        showQuestionNumber();
        removeRightAnswerMarks();
        removeWrongAnswermarks();
    }
    trueAnswerSum = 0;
    falseAnswerSum = 0;
    disableBtn();
}

function showQuestionNumber() {
    let questionNumber = document.getElementById('questionNumber');
    questionNumber.innerHTML = currentQuestions + 1;
}

function answer(parameter) {
    let question =  questions[currentQuestions];
    const keysArray = Object.keys(question);
    if (question.right_answers === keysArray.indexOf(parameter) && trueAnswerSum === 0 && falseAnswerSum === 0 ) {
        let trueAnswer = document.getElementById('answer_'+String(keysArray.indexOf(parameter)));
        removeWrongAnswermarks();
        trueAnswer.classList.add("rightAnswer");
        trueAnswerSum ++;
        enableBtn()
    } 
     else if (falseAnswerSum === 0 && trueAnswerSum === 0) {
         let falseAnswer =  document.getElementById('answer_'+String(keysArray.indexOf(parameter)));
         removeRightAnswerMarks();
         removeWrongAnswermarks();
         falseAnswer.classList.add("wrongAnswer");
         showRightAnswer();
         falseAnswerSum ++ ;
     }
}


function removeRightAnswerMarks() {
    let answer1 = document.getElementById('answer_1');
    let answer2 = document.getElementById('answer_2');
    let answer3 = document.getElementById('answer_3');
    let answer4 = document.getElementById('answer_4');
    answer1.classList.remove("rightAnswer")
    answer2.classList.remove("rightAnswer")
    answer3.classList.remove("rightAnswer")
    answer4.classList.remove("rightAnswer")
}

function removeWrongAnswermarks() {
    let answer1 = document.getElementById('answer_1');
    let answer2 = document.getElementById('answer_2');
    let answer3 = document.getElementById('answer_3');
    let answer4 = document.getElementById('answer_4');
    answer1.classList.remove("wrongAnswer");
    answer2.classList.remove("wrongAnswer");
    answer3.classList.remove("wrongAnswer");
    answer4.classList.remove("wrongAnswer");
}

function showRightAnswer() {
    let question =  questions[currentQuestions];
    let trueAnswer = document.getElementById('answer_'+String(question.right_answers));
    trueAnswer.classList.add("rightAnswer");
}

function disableBtn() {
    document.getElementById("myBtn").disabled = true;
}

function enableBtn() {
    document.getElementById("myBtn").disabled = false;
}

function endScreenActive() {
    inGameScreen = document.getElementById("card-body-1");
    endScreen = document.getElementById("card-body-2");
    inGameScreen.classList.add("displayNone")
    endScreen.classList.add("displayflexActive")
    
}