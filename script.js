let currentQuestion = 0;
let score = 0;
let questions = [];
let answeredQuestions = [];
let timer;
let timeLeft = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    questions = [...practiceQuestions];
answeredQuestions = new Array(questions.length).fill(false);
createPalette();
    document.getElementById("quiz").style.display = "block";
    startTimer();
    showQuestion();
}
function startMockTest() {
    currentQuestion = 0;
    score = 0;
correctAnswers = 0;
wrongAnswers = 0;
    questions = [...mockQuestions];
answeredQuestions = new Array(questions.length).fill(false);
createPalette();
    document.getElementById("quiz").style.display = "block";
    startTimer();
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
    updatePalette();
}

function checkAnswer(option) {
    if (answeredQuestions[currentQuestion]) {
    return;
    }

   let btn = document.getElementById(option);

    if (option === questions[currentQuestion].answer) {
        score += 2;
        correctAnswers++;
        answeredQuestions[currentQuestion] = true;
        document.getElementById("score").innerText = "Score: " + score;
        btn.style.background = "green";
    } else {
        wrongAnswers++;
answeredQuestions[currentQuestion] = true;
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
let skippedQuestions = questions.length - (correctAnswers + wrongAnswers);
document.getElementById("quiz").innerHTML =
"<h2>🎉 Quiz Finished!</h2>" +
"<h3>✅ Correct Answers : " + correctAnswers + "</h3>" +
"<h3>❌ Wrong Answers : " + wrongAnswers + "</h3>" +
"<h3>⏭️ Skipped Questions : " + skippedQuestions + "</h3>" +
"<hr>" +
"<h3>🏆 Score : " + score + " / " + totalMarks + "</h3>" +
"<h3>📊 Percentage : " + percentage.toFixed(0) + "%</h3>" +
"<h3>⭐ Grade : " + grade + "</h3>" +
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
function createPalette() {
    let palette = document.getElementById("palette");
    palette.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        let btn = document.createElement("button");

        btn.innerText = i + 1;

        btn.style.width = "40px";
        btn.style.height = "40px";
        btn.style.margin = "3px";

        btn.onclick = function () {
            currentQuestion = i;
            showQuestion();
        };

        palette.appendChild(btn);
    }
}
function updatePalette() {

    let buttons = document.querySelectorAll("#palette button");

    buttons.forEach((btn, index) => {

        if (index === currentQuestion) {
            btn.style.background = "red";
        }
        else if (answeredQuestions[index]) {
            btn.style.background = "green";
        }
        else {
            btn.style.background = "#666";
        }

    });

}
let timer;
let timeLeft = 0;

function startTimer() {
    clearInterval(timer);

    let minutes = Number(document.getElementById("timerSelect").value);

    if (minutes === 0) {
        document.getElementById("timer").innerText = "♾️ No Timer";
        return;
    }

    timeLeft = minutes * 60;

    timer = setInterval(function () {

        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;

        document.getElementById("timer").innerText =
            "⏱ Time Left: " +
            String(mins).padStart(2, "0") + ":" +
            String(secs).padStart(2, "0");

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("⏰ Time Over!");
            location.reload();
        }

        timeLeft--;

    }, 1000);
}
