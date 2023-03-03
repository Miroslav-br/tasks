const checkQuestionAnswer = (question, correctAnswer) => {
    let userAnswer = prompt(question);
    userAnswer = userAnswer.trim().toLowerCase();
    if (correctAnswer.toLowerCase() === userAnswer) {
        alert('Ответ Верный');
    } else {
        alert('Ответ Неверный');
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
