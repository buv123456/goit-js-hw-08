const throttle = require('lodash.throttle');
const LS_KEY = 'feedback-form-state';


const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));
window.addEventListener('load', onLoad);

const obj = {
    email: '',
    message: ''
};
console.log(Object.values(obj));

function onInput(evt) {
    obj[evt.target.name] = evt.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
    console.log(obj);

}

function onSubmit(event) {
    event.preventDefault();
    console.log(event);
    // const data = 
}

function onLoad() {

}