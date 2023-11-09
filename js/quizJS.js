$(document).ready(function () {
    $('#quizForm').submit(function (e) {
        e.preventDefault();
        let result = calculateResult();
        displayResult(result);
    });

    function calculateResult() {
        let scoreRio = 0;
        let scoreNairobi = 0;
        let scoreTokyo = 0;
        let scoreProfessor = 0;
        let scoreDenver = 0;
        let result = "";

        // Question 1
        let q1 = $('input[name=q1]:checked').val();
        if (q1 === "q1a1") {
            scoreRio += 1;
        } else if (q1 === "q1a2") {
            scoreNairobi += 1;
        } else if (q1 === "q1a3") {
            scoreTokyo += 1;
        } else if (q1 === "q1a4") {
            scoreProfessor += 1;
        } else if (q1 === "q1a5") {
            scoreDenver += 1;
        }

        // Question 2
        let q2 = $('input[name=q2]:checked').val();
        if (q2 === "q2a1") {
            scoreRio += 1;
        } else if (q2 === "q2a2") {
            scoreNairobi += 1;
        } else if (q2 === "q2a3") {
            scoreTokyo += 1;
        } else if (q2 === "q2a4") {
            scoreProfessor += 1;
        } else if (q2 === "q2a5") {
            scoreDenver += 1;
        }

        // Question 3
        let q3 = $('input[name=q3]:checked').val();
        if (q3 === "q3a1") {
            scoreRio += 1;
        } else if (q3 === "q3a2") {
            scoreNairobi += 1;
        } else if (q3 === "q3a3") {
            scoreTokyo += 1;
        } else if (q3 === "q3a4") {
            scoreProfessor += 1;
        } else if (q3 === "q4a5") {
            scoreDenver += 1;
        }
        // Question 4
        let q4 = $('input[name=q4]:checked').val();
        if (q4 === "q4a1") {
            scoreRio += 1;
        } else if (q4 === "q4a2") {
            scoreNairobi += 1;
        } else if (q4 === "q4a3") {
            scoreTokyo += 1;
        } else if (q1 === "q4a4") {
            scoreProfessor += 1;
        } else if (q1 === "q4a5") {
            scoreDenver += 1;
        }

        // Question 5
        let q5 = $('input[name=q5]:checked').val();
        if (q5 === "q5a1") {
            scoreRio += 1;
        } else if (q5 === "q5a2") {
            scoreNairobi += 1;
        } else if (q5 === "q5a3") {
            scoreTokyo += 1;
        } else if (q1 === "q5a4") {
            scoreProfessor += 1;
        } else if (q1 === "q5a5") {
            scoreDenver += 1;
        }

        // Question 6
        let q6 = $('input[name=q6]:checked').val();
        if (q6 === "q6a1") {
            scoreRio += 1;
        } else if (q6 === "q6a2") {
            scoreNairobi += 1;
        } else if (q6 === "q6a3") {
            scoreTokyo += 1;
        } else if (q1 === "q6a4") {
            scoreProfessor += 1;
        } else if (q1 === "q6a5") {
            scoreDenver += 1;
        }
        // Question 7
        let q7 = $('input[name=q7]:checked').val();
        if (q7 === "q7a1") {
            scoreRio += 1;
        } else if (q7 === "q7a2") {
            scoreNairobi += 1;
        } else if (q7 === "q7a3") {
            scoreTokyo += 1;
        } else if (q1 === "q7a4") {
            scoreProfessor += 1;
        } else if (q1 === "q7a5") {
            scoreDenver += 1;
        }

        // Calculate result based on score
        if (scoreRio > scoreTokyo && scoreRio > scoreNairobi && scoreRio > scoreProfessor && scoreRio > scoreDenver) {
            result = "You Rio!";
        } else if (scoreNairobi > scoreTokyo && scoreNairobi > scoreRio && scoreNairobi > scoreProfessor && scoreNairobi > scoreDenver) {
            result = "You Nairobi!";
        } else if (scoreTokyo > scoreRio && scoreTokyo > scoreNairobi && scoreTokyo > scoreProfessor && scoreTokyo > scoreDenver){
            result = "You Tokyo!";
        }
        else if (scoreProfessor > scoreRio && scoreProfessor > scoreNairobi && scoreProfessor > scoreTokyo && scoreProfessor > scoreDenver){
            result = "You Professor!";
        }else {
            result = "You Denver";
        }

        return result;
    }

    function displayResult(result) {
        $('#quiz').addClass('d-none');
        $('#result').removeClass('d-none');
        $('#resultText').text(result);
    }
});



