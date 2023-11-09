document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;
    if ($('#q1').val() === '6') {
        score++;
    }
    if ($('#q2').val() === 'Brooklyn') {
        score++;
    }
    if ($('#q3').val() === 'Howard Stark') {
        score++;
    }
    if ($('#q4').val() === 'Thor') {
        score++;
    }
    if ($('#q5').val() === 'Captain America') {
        score++;
    }
    if ($('#q6').val() === 'Wade Wilson') {
        score++;
    }
    if ($('#q7').val() === 'Wakanda') {
        score++;
    }
    if ($('#q8').val() === 'A cloak') {
        score++;
    }

});