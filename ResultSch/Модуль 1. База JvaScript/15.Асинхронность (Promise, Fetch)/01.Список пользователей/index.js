const userLirst = 'https://jsonplaceholder.typicode.com/users'

const dataContainer = document.querySelector('#data-container')


const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.getAttribute('hidden')
    if(isHidden){
        loaderHTML.removeAttribute('hidden')
    }
    else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const getAllUsers = () => {
    toggleLoader()
    const list = fetch(userLirst)
    list
    .then(response => {
        if(!response.ok){
            throw new Error('Писец, не работает же')
        }
        return response.json()
    })
    .then(users => {
        users.forEach(user => {
            console.log(user);
            dataContainer.append(createUserNameElement(user.name))
        });
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        toggleLoader()
    })
}

getAllUsers()
const createUserNameElement = function(name) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = `${name}`
    li.insertAdjacentElement('beforeend', a)

    return li
}
