// 1
// var uniqueInOrder=function(iterable){
//     let unique = new Array()
//     if(!iterable)
//         return []
//     unique.push(iterable[0])
//     for(let item = 1; item < iterable.length; item++){
//         if(iterable[item] != iterable[item - 1]){
//             unique.push(iterable[item])
//         }
//     }
//     return unique
// }

// 2
var uniqueInOrder = function(iterable){
    return [...iterable].filter((item, index) => item != iterable[index - 1])
}

console.log(uniqueInOrder([]))