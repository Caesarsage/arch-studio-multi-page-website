const form = document.querySelector('#form');
const errorMsgs = Array.from(form.querySelectorAll('[data-errormsg]'));
const formFields = Array.from(form.querySelectorAll('[data-formfield]'));

function checkInput() {
    formFields.map((field, i) => {
        if(field.value !== '') {
            errorMsgs[i].classList.remove('opacity-100');
            errorMsgs[i].classList.add('opacity-0');
            field.classList.remove('border-red-500');
            field.classList.add('border-medium-grey');
        }
    })
}

function validateForm() {
    event.preventDefault();

    formFields.map((field, i) => {
        if(field.value === '') {
            errorMsgs[i].classList.remove('opacity-0');
            errorMsgs[i].classList.add('opacity-100');
            field.classList.remove('border-medium-grey');
            field.classList.add('border-red-500');
        }
    })
}

formFields.forEach(field => field.addEventListener('keydown', checkInput));
form.addEventListener('submit', validateForm);