export class DonateForm {
    #donateForm
    #totalAmountHTML
    #maxDonate
    #minDonate

    static TextObject = {
        DonateButtonText: 'Задонатить',
        InputLabel: `Введите сумму в $`,
    }

    static DefaultDonateValues = {
        min: 0,
        max: 100,
    }

    constructor(minDonate, maxDonate) {
        this.#maxDonate = maxDonate || DonateForm.DefaultDonateValues.max;
        this.#minDonate = minDonate || DonateForm.DefaultDonateValues.min;
    }

    #renderDonateButton() {
        const donateButton = document.createElement('button');
        donateButton.classList = 'donate-form__submit-button';
        donateButton.type = 'submit';
        donateButton.innerText = DonateForm.TextObject.DonateButtonText;

        return donateButton;
    }

    #renderAmountInput() {
        const amountInput = document.createElement('input');
        const amountInputLabel = document.createElement('label');
        amountInputLabel.textContent = DonateForm.TextObject.InputLabel;
        amountInputLabel.className = 'donate-form__input-label';

        amountInput.classList = 'donate-form__number-input';
        amountInput.name = 'amount';
        amountInput.type = 'number';
        amountInput.className = 'donate-form__donate-input';
        amountInput.max = this.#maxDonate;
        amountInput.min = this.#minDonate;
        amountInput.required = 'required';

        amountInputLabel.append(amountInput);

        return amountInputLabel;
    }

    render() {
        this.#donateForm = document.createElement('form');
        this.#donateForm.className = 'donate-form';

        this.#totalAmountHTML = document.createElement('h1');
        this.#totalAmountHTML.id = 'total-amount';

        const donateButton = this.#renderDonateButton();
        const amountInput = this.#renderAmountInput();
        this.#donateForm.append(this.#totalAmountHTML, amountInput, donateButton);

        return this.#donateForm;
    }
}