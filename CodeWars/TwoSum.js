function twoSum(numbers, target) {
    const indexes = []
    numbers.forEach((value, index) => {
        const indexOfSecondNum = numbers.findIndex(element => element == target - value)
        if(indexOfSecondNum != -1 && index != indexOfSecondNum && indexes.length === 0)
            indexes.push(index, indexOfSecondNum)
    });
    return indexes;
}

console.log(twoSum( [2, 2, 3], 4));
