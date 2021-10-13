function showError(container, errorMessage) {
    container.className = 'error';
    let msgElem = document.createElement('span');

    msgElem.className = 'error-message';
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == 'error-message') container.removeChild(container.lastChild);
}

function validatePassword(form) {
    let elems = form.elements;

    resetError(elems.password.parentNode);
    if (!elems.password.value) showError(elems.password.parentNode, ' Укажите пароль.');
}

function validatePasswordRep(form) {
    let elems = form.elements;

    resetError(elems.password2.parentNode);
    if (elems.password.value != elems.password2.value) showError(elems.password2.parentNode, ' Пароли не совпадают.');
}

// function submit(){}
