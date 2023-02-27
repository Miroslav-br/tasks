const words = 'Hey fellow warriors'
console.log(spinWords(words))


function spinWords(string){
    const arrString = string.split(' ')
    let newString = ''
    arrString.forEach(element => {
        if(element.length >= 5){
            newString = newString.concat(' ' + element.split('').reverse().join(''))
        }else newString = newString.concat(' ' + element)
    })
    newString.trim()
    return newString
}

// Как должно быть

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

// Тоже понравилось

function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }
  