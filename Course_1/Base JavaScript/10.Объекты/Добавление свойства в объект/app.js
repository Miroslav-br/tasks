const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')

function giveJobToStudent(student, jobName){
    updateProperty = Object.assign({},student)
    updateProperty.job = jobName
    console.log(`Поздравляем!\nУ студента ${updateProperty.fullName} появилась новая работа!\nТеперь он ${updateProperty.job}`)
    return updateProperty
}
