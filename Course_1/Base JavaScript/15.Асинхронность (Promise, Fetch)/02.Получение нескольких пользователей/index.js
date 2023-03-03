const usersListUrl = 'https://jsonplaceholder.typicode.com/users'
const ids = [5,6,2,1]
const dataContainer = document.querySelector('#data-container')


const GetUsersById = (arrId) => {
    const users = arrId.map((id) => fetch(`${usersListUrl}/${id}`))
    Promise.all(users)
        .then((responses) => {
            const dataResponses = responses.map((response) => response.json())
            return Promise.all(dataResponses)
        })
        .then((dataUsers) => {
            dataUsers.forEach((user) => {
            dataContainer.append(createUserNameElement(user.name))
            })
        })
        .catch((error) => {
            console.log(error);
        })
}

const createUserNameElement = function(name) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = `${name}`
    li.insertAdjacentElement('beforeend', a)

    return li
}

GetUsersById(ids)