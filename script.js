const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
    const nameValue = nameInput.value.trim();
    const nameError = document.getElementById('nameError');
    
    if (nameValue === '') {
        showError(nameInput, nameError, 'Name is required');
        return false;
    } else if (nameValue.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    } else {
        showSuccess(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    
    if (emailValue === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    const messageError = document.getElementById('messageError');
    
    if (messageValue === '') {
        showError(messageInput, messageError, 'Message is required');
        return false;
    } else if (messageValue.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    } else {
        showSuccess(messageInput, messageError);
        return true;
    }
}

function showError(input, errorElement, message) {
    input.classList.remove('success');
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function showSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.classList.remove('show');
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    

    if (isNameValid && isEmailValid && isMessageValid) {
        successMessage.classList.add('show');
        

        setTimeout(() => {
            form.reset();
            nameInput.classList.remove('success');
            emailInput.classList.remove('success');
            messageInput.classList.remove('success');
            
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 500);
        }, 2000);
    }
});

nameInput.addEventListener('input', function() {
    this.value = this.value.replace(/[<>]/g, '');
});

messageInput.addEventListener('input', function() {
    this.value = this.value.replace(/[<>]/g, '');
});