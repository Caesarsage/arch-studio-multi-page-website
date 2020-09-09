const form = document.querySelector('#form');
const nameField = document.querySelector('#nameInput');
const nameErrorMsg = document.querySelector('#nameErrorMsg');
const emailErrorMsg = document.querySelector('#emailErrorMsg');
const msgErrorMsg = document.querySelector('#msgErrorMsg');
const emailField = document.querySelector('#emailInput');
const msgField = document.querySelector('#textarea');
const btn = document.querySelector('#formBtn');

function validateForm() {
    if(nameField.value === '') {
        nameErrorMsg.classList.remove('hidden');
    }
    if(emailField.value === '') {
        emailErrorMsg.classList.remove('hidden');
    }
    if(msgField.value === '') {
        msgErrorMsg.classList.remove('hidden');
    }
}


btn.addEventListener('click', validateForm);
form.addEventListener('submit', () => event.preventDefault());