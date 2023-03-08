export default class SelectionSort{
    constructor(){

    }

    run (arr) {
        const newArr = [];
        while (arr.length){
            let smallestIndex = this.#findSmallest(arr);
            newArr.push(arr[smallestIndex]);
            arr.splice(smallestIndex,1)
        }

        return newArr;
    }

    #findSmallest(arr){
        let smallest = arr[0];
        let smallestIndex = 0;
        arr.forEach((element,index) => {
           if(element < smallest){
                smallest = element;
                smallestIndex = index;    
           } 
        }); 
        return smallestIndex;
    }
}