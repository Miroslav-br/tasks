const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

const toggleHidden = () => {
    const dataContainer = document.querySelector('#data-container')
    const hasAtribute = dataContainer.hasAttribute('hidden')
    if(hasAtribute){
        dataContainer.removeAttribute('hidden')
    }else{
        dataContainer.setAttribute('hidden', '')
    }
}

const createTagUL = (albums) => {
    const ulContainer = document.createElement('ul')
    albums.forEach(element => {
        const nameLi = document.createElement('li')
        nameLi.textContent = element.title
        ulContainer.append(nameLi)
    });

    return ulContainer
}

const renderAlbum = async () => {
    try{
        toggleHidden()
        const response = await fetch(ALBUMS_URL)
        console.log(response)
        const datas = await response.json()
        console.log(datas);
        document.body.append(createTagUL(datas))
    }catch{
        document.body.innerText = 'Произошла ошибка при попытке получения данных'
    }finally{
        toggleHidden()
    }
}

renderAlbum()