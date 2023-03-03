const getName1 = function(name) {
    return `Имя равно ${name}`;
}

function getName2(name) {
    return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log('getName1', getName1('getName1'));
console.log('getName2', getName2('getName2'));
console.log('getName3', getName3('getName3'));