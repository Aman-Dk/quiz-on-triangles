const quizform = document.querySelector(".quiz-form");
var result = document.querySelector(".output");
var submitButton = document.querySelector("#submit");

const correctAnswers = [
    "90°",
    "Equilateral triangle",
    "12, 16, 20",
    "right angled",
    "30"
];

function calculateScore() {
    const formResults = new FormData(quizform);
    let score = 0,
        index = 0;
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    //   console.log("The score is "+score);
    result.innerText = "The score is " + score;
}

submitButton.addEventListener('click', calculateScore);