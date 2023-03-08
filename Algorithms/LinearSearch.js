export default class LinearSearch{
    constructor (){

    }

    run(arr, target){
        let count = 0;
        let isFined = false;
        for (let index = 0; index < arr.length; index++) {
            count++;
            if(arr[index] === target){
                return  [isFined = true, count];
            }
        }

        return [isFined,count];
    }
}