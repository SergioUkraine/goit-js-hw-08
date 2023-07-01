const throttle = require('lodash.throttle');
const LS_FEEDACK = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');
const getFromStorage = localStorage.getItem(LS_FEEDACK);


let feedback = {email: '', message: '',};

if (getFromStorage) {
    emailInput.value = (JSON.parse(getFromStorage)).email;
    messageInput.value = (JSON.parse(getFromStorage)).message;
    feedback = {email: emailInput.value, message: messageInput.value,};
}

const throttledAddToLocalStorage = throttle(addToLocalStorage, 500);

feedbackForm.addEventListener('input', throttledAddToLocalStorage);
feedbackForm.addEventListener('submit', handleSubmitBtnPress);

function addToLocalStorage(e) {
    if (e.target.name !== 'email' && e.target.name !== 'message') return;
    feedback[e.target.name] = e.target.value;
    localStorage.setItem(LS_FEEDACK, JSON.stringify(feedback));
}

function handleSubmitBtnPress(e) {
    e.preventDefault();
    if (!getFromStorage) return;
    console.log(feedback);
    feedback = { email: '', message: '',};
    emailInput.value = feedback.email;
    messageInput.value = feedback.message;
    localStorage.removeItem(LS_FEEDACK);
}
