export default class BinSearch{
    constructor (){

    }

    run(arr, target){
        let count = 0;
        let isFined = false;
        let low = 0;
        let high = arr.length - 1;
        let mid;
        let guess;
        while (low <= high){
            count++;
            mid = Math.floor((low + high) / 2);
            if(arr[mid] < target){
                low = mid;
            }else {
                high = mid;
            }
            guess = arr[mid];
            if(guess === target){
                return [isFined = true,count];
            }

            if (guess < target) {
                low++;
            }else{
                high--;
            }
        }

        return [isFined,count];
    }
}