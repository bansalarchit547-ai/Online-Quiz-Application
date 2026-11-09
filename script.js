function checkAnswers() {

    let score = 0;

    let answers = {
        q1: "a",
        q2: "b",
        q3: "c"
    };

    for (let question in answers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        "Your Final Score: " + score + " / 3";

}