const photoIds = [60,12,55]
const dataContainer = document.querySelector('#data-container')
const photosUrl = 'https://jsonplaceholder.typicode.com/photos'

const getFastestLoadedPhoto = (arrId) => {
    Promise.race(arrId.map((id) => fetch(`${photosUrl}/${id}`)))
        .then((response) => {
            return response.json()    
        })
        .then((photo) => {
            dataContainer.append(createLiElement(photo))
            console.log(photo);
        })
        .catch (err => console.error(err))
}

const createLiElement = function(photo){
    const li = document.createElement('li')
    li.className = 'photo-item'
    const img = document.createElement('img')
    img.className = 'photo-item_img'
    img.src = `${photo.url}`
    const h3 = document.createElement('h3')
    h3.className = 'photo-item_title'
    h3.textContent = `${photo.title}`
    
    li.append(img,h3)
    return li
}

getFastestLoadedPhoto(photoIds)