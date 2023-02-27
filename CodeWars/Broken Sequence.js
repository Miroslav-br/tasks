let sequence = '2 1 4 a a'
console.log(findMissingNumber(sequence))

function findMissingNumber(sequence){
    const arrsequence = sequence.trim().split(' ').sort((a,b) => a - b)
    for(let i = 0; i < arrsequence.length; i++){
        if(sequence == "")return 0
        if(/\s?[a-z]\s?/gi.test(sequence))return 1
        if(arrsequence[i] != (i + 1))return i+1
        if(i + 1 == arrsequence.length)return 0

        
    }
}