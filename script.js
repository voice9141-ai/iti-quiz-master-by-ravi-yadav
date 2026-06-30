let currentQuestion = 0;
let score = 0;
let questions = [];
let answeredQuestions = [];
let shuffledOptions = [];
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
function startMockTest1() {
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

function startMockTest2() {

    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    questions = [...mockQuestionsSet2];
    answeredQuestions = new Array(questions.length).fill(false);

    createPalette();
    document.getElementById("quiz").style.display = "block";
    startTimer();
    showQuestion();
}

function startMockTest3() {

    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    questions = [...mockQuestionsSet3];
    answeredQuestions = new Array(questions.length).fill(false);

    createPalette();
    document.getElementById("quiz").style.display = "block";
    startTimer();
    showQuestion();
}
function shuffleOptions(q) {

    shuffledOptions = [
        { key: "A", text: q.A },
        { key: "B", text: q.B },
        { key: "C", text: q.C },
        { key: "D", text: q.D }
    ];

    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] =
        [shuffledOptions[j], shuffledOptions[i]];
    }

}
function showQuestion() {
    const q = questions[currentQuestion];
    shuffleOptions(q);
document.getElementById("progress").innerText =
"Question " + (currentQuestion + 1) + "/" + questions.length;

document.getElementById("score").innerText =
"Score: " + score;
    document.getElementById("question").innerText = q.question;
    let img = document.getElementById("questionImage");

if (q.image) {
    img.src = q.image;
    img.style.display = "block";
} else {
    img.style.display = "none";
}
    document.getElementById("A").innerText = shuffledOptions[0].text;
document.getElementById("B").innerText = shuffledOptions[1].text;
document.getElementById("C").innerText = shuffledOptions[2].text;
document.getElementById("D").innerText = shuffledOptions[3].text;
    updatePalette();
}

function checkAnswer(option) {
    if (answeredQuestions[currentQuestion]) {
    return;
    }

   let btn = document.getElementById(option);
    const index = { A: 0, B: 1, C: 2, D: 3 }[option];
let selected = shuffledOptions[index];

    if (selected.key === questions[currentQuestion].answer) {
        score += 2;
        correctAnswers++;
        answeredQuestions[currentQuestion] = true;
        document.getElementById("score").innerText = "Score: " + score;
        btn.style.background = "green";
    } else {
        wrongAnswers++;
answeredQuestions[currentQuestion] = true;
        btn.style.background = "red";
        for (let i = 0; i < shuffledOptions.length; i++) {
    if (shuffledOptions[i].key === questions[currentQuestion].answer) {
        let id = ["A", "B", "C", "D"][i];
        document.getElementById(id).style.background = "green";
       break;
    }
  }
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
function showAbout() {
    alert(
        "👨‍💻 Ravi Tech Academy\n\n" +
        "Designed by R. Yadav\0x41✨\n\n" " +
        "Built for Electronics Mechanic Students."
    );
}
