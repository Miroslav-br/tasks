const ordersArr = [4, 2, 1, 3];
const people = [
{ id: 1, name: "Максим" },
{ id: 2, name: "Николай" },
{ id: 3, name: "Ангелина" },
{ id: 4, name: "Виталий" },
];


const result = giveTalonsInOrder(people, ordersArr);

function giveTalonsInOrder(people,ordersArr){
    let realOrder = []
    for (let i = 0; i < ordersArr.length; i++) {
        people.forEach(element => { element.id == ordersArr[i] ? realOrder.push(element):``});
    }
    return realOrder
}

console.log('result', result);


