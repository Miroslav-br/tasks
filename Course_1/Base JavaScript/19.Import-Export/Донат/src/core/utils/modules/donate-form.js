
export default class DonateForm {
    #form
    #totalAmount
    #createNewDonate
    constructor (totalAmount, createNewDonate) {
        this.#form = document.createElement('form')
        this.#totalAmount = totalAmount
        this.#createNewDonate = createNewDonate
    }
    render() {
        this.#renderForm()
        return this.#form
    }

    #renderForm() {
        this.#form.className = 'donate-form'
        this.#form.addEventListener('submit', this.#onCreateNewDonateSubmit.bind(this))
        // h1
        const formH1 = document.createElement('h1')
        formH1.id = 'total-amount'
        formH1.innerHTML =  this.updateTotalAmount(this.#totalAmount) || 0 
        // label
        const formLabel = document.createElement('label')
        formLabel.className = 'donate-form_input-label'
        formLabel.textContent = "Введите сумму"

        const formInput = document.createElement('input')
        formInput.className = 'donate-form_donate-input'
        formInput.min = 1
        formInput.max = 100
        formInput.required = ''
        formInput.name = 'amount'
        formInput.type = 'number'
        
        formLabel.append(formInput)
        // button
        const formButton = document.createElement('button')
        formButton.className = 'donate-form_submit-button'
        formButton.textContent = 'Задонатить'
        formButton.type = 'submit'

        this.#form.append(formH1,formLabel,formButton)
    }

    updateTotalAmount(newAmount) {
        return `${newAmount}$`
    }

    #onCreateNewDonateSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        const newDonateValue = Number(event.target.amount.value);
        if (newDonateValue && this.#createNewDonate) {
            const newDonate = {
                date: new Date(),
                amount: newDonateValue,
            };
            this.#createNewDonate(newDonate);
            event.target.amount.value = '';
        }
    }

}