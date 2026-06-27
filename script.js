let currentQuestion = 0;
let score = 0;
let questions = [];
let answeredQuestions = [];

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    questions = [...practiceQuestions];
answeredQuestions = new Array(questions.length).fill(false);
createPalette();
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}
function startMockTest() {
    currentQuestion = 0;
    score = 0;

    questions = [...mockQuestions];
answeredQuestions = new Array(questions.length).fill(false);
createPalette();
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}
function showQuestion() {
    const q = questions[currentQuestion];
document.getElementById("progress").innerText =
"Question " + (currentQuestion + 1) + "/" + questions.length;

document.getElementById("score").innerText =
"Score: " + score;
    document.getElementById("question").innerText = q.question;
    document.getElementById("A").innerText = q.A;
    document.getElementById("B").innerText = q.B;
    document.getElementById("C").innerText = q.C;
    document.getElementById("D").innerText = q.D;
}

function checkAnswer(option) {

    let btn = document.getElementById(option);

    if (option === questions[currentQuestion].answer) {
        score += 2;
        document.getElementById("score").innerText = "Score: " + score;
        btn.style.background = "green";
    } else {
        btn.style.background = "red";
        document.getElementById(questions[currentQuestion].answer).style.background = "green";
    }

    setTimeout(function () {

        document.getElementById("A").style.background = "";
        document.getElementById("B").style.background = "";
        document.getElementById("C").style.background = "";
        document.getElementById("D").style.background = "";

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            let totalMarks = questions.length * 2;
let percentage = (score / totalMarks) * 100;

let grade = "";

if (percentage >= 90) {
    grade = "A+ 🏆";
} else if (percentage >= 75) {
    grade = "A ⭐";
} else if (percentage >= 60) {
    grade = "B 👍";
} else if (percentage >= 40) {
    grade = "C 🙂";
} else {
    grade = "Fail ❌";
}

document.getElementById("quiz").innerHTML =
    "<h2>🎉 Quiz Finished!</h2>" +
    "<h3>Score : " + score + " / " + totalMarks + "</h3>" +
    "<h3>Percentage : " + percentage.toFixed(0) + "%</h3>" +
    "<h3>Grade : " + grade + "</h3>" +
    "<button onclick=\"location.reload()\">🔄 Play Again</button>";
        }
    }, 1000);
}
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}
