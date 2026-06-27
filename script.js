let currentQuestion = 0;
let score = 0;

function startQuiz() {
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
            document.getElementById("quiz").innerHTML =
                "<h2>🎉 Quiz Finished!</h2>" +
                "<h3>Your Score : " + score + " / " + (questions.length * 2) + "</h3>" +
                "<button onclick=\"location.reload()\">🔄 Play Again</button>";
        }

    }, 1000);
}
