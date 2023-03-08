export class Reqursion {
    constructor(){

    }

    recursion(item,key){
        if(item.length){
            item.forEach(element => {
                this.recursion(element, key);
            });
        }
        if (item === key) {
            console.log('Нашел');
        }
    }

    whileSearch(arr, key){
        const stack = [...arr];
        let result = 'Не найдено';
        while (stack.length){
            const item = stack.pop();
            if(item === key){
                return 'Найдено';
            }
            if(item.length) {
                stack.push(...item);
            }
        }
        return result;
    }
}