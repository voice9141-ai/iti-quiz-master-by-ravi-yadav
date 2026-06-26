let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;
    document.getElementById("A").innerText = q.A;
    document.getElementById("B").innerText = q.B;
    document.getElementById("C").innerText = q.C;
    document.getElementById("D").innerText = q.D;
}

function checkAnswer(option) {

    if(option === questions[currentQuestion].answer){
        score++;
        alert("✅ Correct Answer");
    }else{
        alert("❌ Wrong Answer");
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }else{
        document.getElementById("quiz").innerHTML =
        "<h2>🎉 Quiz Finished!</h2><h3>Your Score : "
        + score + " / " + questions.length + "</h3>";
    }

}
