function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 0) {
        alert('number должен быть целым числом и больше нуля!');
    } else {
        let counter = 0;
        for (let i = number; i > 0; i -= 1) {
          const isDivisor = number % i === 0;
          if (isDivisor) {
              counter += 1;
          }
        }
      
        return counter;   
    }
}

const result = getDivisors(10);
console.log('result', result);
