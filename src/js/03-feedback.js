const throttle = require('lodash.throttle');
const LS_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const obj = getValue();

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));
window.addEventListener('load', onLoad);

function onInput(evt) {
    obj[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log(obj);
    evt.target.reset();
    localStorage.removeItem(LS_KEY);
}

function onLoad() {
    Object.entries(obj).forEach(([name, value]) => { formEl.elements[name].value = value })
}

function getValue() {
    try {
        const formData = localStorage.getItem(LS_KEY);
        return formData ? JSON.parse(formData) : {};
    } catch (error) {
        console.error(error.message);
    }
}