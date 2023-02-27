const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation')

burger.addEventListener('click', (event) => {
    const { target } = event;
    target.classList.toggle('burger_active');
    navigation.classList.toggle('navigation_active');
})