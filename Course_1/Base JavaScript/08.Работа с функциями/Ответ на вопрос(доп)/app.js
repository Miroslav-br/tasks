checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?','32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?','Колибри');

function checkQuestionAnswer (question,correctAnswer,answerFromUser = prompt(`${question}`)){
    if(answerFromUser.toLowerCase() === correctAnswer.toLowerCase()){
        alert('Answer is correct')
        return
    }
    alert('Answer is Incorrect')
}