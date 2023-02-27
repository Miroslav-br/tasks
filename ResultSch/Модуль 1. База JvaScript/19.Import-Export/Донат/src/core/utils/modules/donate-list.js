import { getDateFormat } from "../core/utils/date"

export default class DonateList {

    #donateList = []
    #donatesContainer = document.createElement('div')

    constructor (donateList) {
        this.#donateList = donateList
    }

    render () {
        this.#donatesContainer.className = 'donates-container'
        this.#addElementsinContainer()
        return this.#donatesContainer
    }

    #addElementsinContainer () {
        this.#donatesContainer.innerHTML = ''
        const donatesH2 = document.createElement('div')
        donatesH2.className = 'donates-container__title'
        donatesH2.textContent = 'Список донатов'

        const listOfDonates = this.#collectDonates()

        this.#donatesContainer.append(donatesH2,listOfDonates)
    }

    #collectDonates () {
        const collectionContainer = document.createElement('div')
        collectionContainer.className = 'donates-container__donates'
        this.#donateList.forEach(value => {
            const donate = document.createElement('div')
            donate.className = 'donate-item'
            donate.innerHTML = `${getDateFormat(value.date)} - ${value.amount}`

            collectionContainer.append(donate)
        })
        return collectionContainer
    }

    updateDonates() {
        this.#addElementsinContainer() 
    }

}