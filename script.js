const form = document.getElementById('form');
const inputs = [
    { element: document.getElementById('firstName'), errorMessage: 'First Name cannot be empty' },
    { element: document.getElementById('lastName'), errorMessage: 'Last Name cannot be empty' },
    { element: document.getElementById('email'), errorMessage: 'Email cannot be empty' },
    { element: document.getElementById('password'), errorMessage: 'Password cannot be empty' }
];

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

    inputs.forEach(({ element, errorMessage }) => {
        if (element.value === "") {
            const errorMessageElement = createErrorMessage(errorMessage);
            element.parentNode.appendChild(errorMessageElement);
            element.style.border = '1px solid hsl(354, 100%, 66%)';
            const iconElement = createErrorIcon(svgContent);
            element.parentNode.appendChild(iconElement);
        } else {
            element.style.border = '';
        }
    });

    inputs.forEach(({ element }) => element.blur());
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}