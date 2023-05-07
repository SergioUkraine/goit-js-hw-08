import throttle from 'lodash.throttle';

const FEEDBACK_STORAGE = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageTextarea = feedbackForm.querySelector('[name="message"]');

let feedback = {};

emailInput.value = (JSON.parse(localStorage.getItem(FEEDBACK_STORAGE))).email;
messageTextarea.value = (JSON.parse(localStorage.getItem(FEEDBACK_STORAGE))).message;

feedback = {email: emailInput.value, message: messageTextarea.value,};

const throttledAddToLocalStorage = throttle(addToLocalStorage, 500);

emailInput.addEventListener('input', throttledAddToLocalStorage);
messageTextarea.addEventListener('input', throttledAddToLocalStorage);
feedbackForm.addEventListener('submit', handleSubmitBtnPress);

function addToLocalStorage(e) {
    if (emailInput.value === '' && messageTextarea.value === '') {
        localStorage.clear();
        console.log(localStorage.getItem(FEEDBACK_STORAGE));
    }
    feedback[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_STORAGE, JSON.stringify(feedback));
}

function handleSubmitBtnPress(e) {
    e.preventDefault();
    console.log("Submit result")
    console.log(feedback);
    feedback = { email: null, message: null,};
    emailInput.value = feedback.email;
    messageTextarea.value = feedback.message;
    localStorage.setItem(FEEDBACK_STORAGE, JSON.stringify(feedback));
}
