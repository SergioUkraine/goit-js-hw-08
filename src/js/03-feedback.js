const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageTextarea = feedbackForm.querySelector('[name="message"]');

let feedback = {};
if (localStorage.getItem('feedback-form-state')) {
    emailInput.value = (JSON.parse(localStorage.getItem('feedback-form-state'))).email;
    messageTextarea.value = (JSON.parse(localStorage.getItem('feedback-form-state'))).message;
}


feedback = {email: emailInput.value, message: messageTextarea.value,};

const throttledAddToLocalStorage = throttle(addToLocalStorage, 500);

emailInput.addEventListener('input', throttledAddToLocalStorage);
messageTextarea.addEventListener('input', throttledAddToLocalStorage);
feedbackForm.addEventListener('submit', handleSubmitBtnPress);

function addToLocalStorage(e) {
    feedback[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function handleSubmitBtnPress(e) {
    e.preventDefault();
    console.log(feedback);
    feedback = { email: '', message: '',};
    emailInput.value = feedback.email;
    messageTextarea.value = feedback.message;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}
