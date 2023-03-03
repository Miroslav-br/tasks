/*
    Первый и самый долгий способ
 */

const bodyElement = document.querySelector("body");

//Создание формы
const newForm = document.createElement("form");
newForm.classList.add("create-user-form");
bodyElement.append(newForm);
const updateForm = bodyElement.querySelector(".create-user-form");

// Создание Labelов

const newLabel1 = document.createElement("label");
updateForm.append(newLabel1);
const newLabel2 = document.createElement("label");
updateForm.append(newLabel2);
const updateLabel = bodyElement.querySelectorAll("label");
updateLabel[0].innerHTML = "Имя";
updateLabel[1].innerHTML = "Пароль";

// Инпуты

const newInput1 = document.createElement("input");
updateLabel[0].append(newInput1);
const newInput2 = document.createElement("input");
updateLabel[1].append(newInput2);
const propertiesForInput = bodyElement.querySelectorAll("input");
propertiesForInput[0].setAttribute("type", "text");
propertiesForInput[0].setAttribute("name", "userName");
propertiesForInput[0].setAttribute("placeholder", "Введите ваше имя");
propertiesForInput[1].setAttribute("type", "password");
propertiesForInput[1].setAttribute("name", "password");
propertiesForInput[1].setAttribute("placeholder", "Введите пароль");

// Кнопка

const newButton = document.createElement("button");
updateForm.append(newButton);
const propertiesForButton = bodyElement.querySelector("button");
propertiesForButton.setAttribute("type", "submit");
propertiesForButton.innerText = "Подтвердить";
