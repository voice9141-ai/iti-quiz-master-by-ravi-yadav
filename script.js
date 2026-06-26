const question = {
  question: "1. Which device converts AC to DC?",
  A: "Transformer",
  B: "Rectifier",
  C: "Capacitor",
  D: "Inductor",
  answer: "B"
};

function startQuiz() {
  document.getElementById("quiz").style.display = "block";

  document.getElementById("question").innerText = question.question;
  document.getElementById("A").innerText = question.A;
  document.getElementById("B").innerText = question.B;
  document.getElementById("C").innerText = question.C;
  document.getElementById("D").innerText = question.D;
}

function checkAnswer(option) {
  if (option === question.answer) {
    alert("✅ Correct Answer!");
  } else {
    alert("❌ Wrong Answer!");
  }
}
