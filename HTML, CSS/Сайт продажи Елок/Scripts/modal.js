const orderButton = document.querySelector('main');
const inputOrder = document.querySelector('.form__order');
const overlayOrder = document.querySelector('.overlay_order');

orderButton.addEventListener('click',function(event) {
    if (event.target.className.match(/product__button_order/)) {
        overlayOrder.classList.toggle('overlay_active');
        inputOrder.value = event.target.dataset.order
    }
})

overlayOrder.addEventListener('click', event => {
    console.log(event.target.className);
    if(event.target.closest('.modal__close') || event.target.classList[0] === 'overlay'){
        overlayOrder.classList.toggle('overlay_active');
    }
})