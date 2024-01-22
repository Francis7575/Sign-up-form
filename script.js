const form = document.getElementById('form');
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Values
const msg1 = 'First Name cannot be empty';
const msg2 = 'Last Name cannot be empty';
const msg3 = 'Email cannot be empty';
const msg4 = 'Looks like this is not an email';
const msg5 = 'Password cannot be empty';
const svgContent = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;

function createErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('error_message');
    return errorMessage;
}

function clearMessages() {
    const existingErrorMessages = document.querySelectorAll('.error_message');
    existingErrorMessages.forEach(message => message.remove());
}

function createErrorIcon(icon) {
    const errorIcon = document.createElement('span');
    errorIcon.classList.add('error_icon');
    errorIcon.innerHTML = icon;
    return errorIcon;
}

function clearIcons() {
    const existingErrorIcons = document.querySelectorAll('.error_icon');
    existingErrorIcons.forEach(icon => icon.remove());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessages();
    clearIcons();

    if (fname.value === "") {
        const errorMessage = createErrorMessage(msg1);
        fname.parentNode.appendChild(errorMessage);
        fname.style.border = '1px solid hsl(354, 100%, 66%)';
        const iconElement = createErrorIcon(svgContent);
        fname.parentNode.appendChild(iconElement);
    } else {
        fname.style.border = '';
    }

    if (lname.value === "") {
        const errorMessage = createErrorMessage(msg2);
        lname.parentNode.appendChild(errorMessage);
        lname.style.border = '1px solid hsl(354, 100%, 66%)';
        const iconElement = createErrorIcon(svgContent);
        lname.parentNode.appendChild(iconElement);
    } else {
        lname.style.border = '';
    }

    if (email.value === "") {
        const errorMessage = createErrorMessage(msg3);
        email.parentNode.appendChild(errorMessage);
        email.style.border = '1px solid hsl(354, 100%, 66%)';
        const iconElement = createErrorIcon(svgContent);
        email.parentNode.appendChild(iconElement);
    } else if (!isValidEmail(email.value)) {
        const errorMessage = createErrorMessage(msg4);
        email.parentNode.appendChild(errorMessage);
        email.style.border = '1px solid hsl(354, 100%, 66%)';
        const iconElement = createErrorIcon(svgContent);
        email.parentNode.appendChild(iconElement);
    } else {
        email.style.border = '';
    }

    if (password.value === "") {
        const errorMessage = createErrorMessage(msg5);
        password.parentNode.appendChild(errorMessage);
        password.style.border = '1px solid hsl(354, 100%, 66%)';
        const iconElement = createErrorIcon(svgContent);
        password.parentNode.appendChild(iconElement);
    } else {
        password.style.border = '';
    }
    fname.blur();
    lname.blur();
    email.blur();
    password.blur();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}
