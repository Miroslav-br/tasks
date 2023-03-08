import LinearSearch from "./LinearSearch.js";
import BinSearch from "./BinSearch.js";
import SelectionSort from "./SelectionSort.js";
import { Reqursion } from "./Recursion.js";


/*
    Varieties of "O-big" for calculating the complexity of algorithms
    O(log()n)
    O(n)
    O(n * log(n))
    O(n2)
    O(n!)
*/


//Linear Search O(n) ==========================
const linear = new LinearSearch();
console.log('Linear Search ==========================');
console.log(linear.run(Array(10000000).fill().map((item, index) => index + 1),5645135));

//Bin search (for sorted arrays) O(logn) ==================


const bin = new BinSearch();
console.log('Bin Search ==========================');
console.log(bin.run(Array(10000000).fill().map((item, index) => index + 1),5645135));

//Selection sort = Сортировка выбором

const selectionSort = new SelectionSort();
console.log('Selection Search ==========================');
console.log(selectionSort.run([1,5,6,23425,653,452,66,73,17,4,25]));

//Recursion and similar algorithms

console.log('Recursion ==========================');
const recursion = new Reqursion();
const arr = [[[1,2,3],[56,64,234]],[[63,456,78]],[1]];
console.log('WhileSearch:',recursion.whileSearch(arr,456));
recursion.recursion(arr, 56)
