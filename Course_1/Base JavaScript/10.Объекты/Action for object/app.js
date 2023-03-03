const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const result3 = handleObjects(student, 'programmingLanguage',
'get')
const result1 = handleObjects(student, 'programmingLanguage',
'delete')
const result2 = handleObjects(student, 'programmingLanguage',
'add')

function handleObjects(student, key, action){
    let newStudent = {...student}
    switch (action) {
        case 'get':
            return newStudent[`${key}`]
            break
        case 'delete':
            delete newStudent[`${key}`]
            return newStudent
            break
        case 'add':
            newStudent[`${key}`] = '...'
            return newStudent
            break;
        default:
            return newStudent
            break
    }
}
console.log('result1', result1)
console.log('result2', result2)
console.log('result3', result3)
console.log()