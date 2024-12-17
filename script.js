const questions = [
    {
        questions: "What is the chemical symbol for the element oxygen?",
        answer: [
            { text: "O" , correct : true },
            { text: "H5" , correct : false },
            { text: "CO2" , correct : false },
            { text: "H2O" , correct : false },
        ]
    },
    {
        questions: "What is the capital of France?",
        answer: [
            { text: "Berlin" , correct : false },
            { text: "Madrid" , correct : false },
            { text: "Paris" , correct : true },
            { text: "Rome" , correct : false },
        ]
    },
    {
        questions: "In what year did the Titanic sink?",
        answer: [
            { text: "1998" , correct : false },
            { text: "1875" , correct : false },
            { text: "2022" , correct : false },
            { text: "1912" , correct : true },
        ]
    },
    {
        questions: "Which country won the FIFA World Cup in 2018?",
        answer: [
            { text: "Germany" , correct : false },
            { text: "Brazil" , correct : false },
            { text: "France" , correct : true },
            { text: "Argentina" , correct : false },
        ]
    },
];

const questionElements = document.getElementById("question");
const ansButtons = document.getElementById("ans_buttons");
const nextBtn = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "none"; 
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElements.innerHTML = `Question ${questionNo}: ${currentQuestion.questions}`;

    // Clear previous buttons
    ansButtons.innerHTML = '';

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.onclick = () => checkAnswer(answer);
        ansButtons.appendChild(button);
    });
}

function checkAnswer(answer) {
    // Check if the answer is correct
    if (answer.correct) {
        score++;
    }

    // Disable all buttons after an answer is selected
    const buttons = ansButtons.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

    // Show the next button
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextBtn.style.display = "none"; // Hide next button again until the next answer
    } else {
        // End of quiz
        questionElements.innerHTML = `Quiz Over! Your score is ${score}/${questions.length}`;
        ansButtons.innerHTML = ''; // Clear answer buttons
        nextBtn.style.display = "none"; // Hide next button
    }
}

nextBtn.addEventListener('click', nextQuestion);

startQuiz();
