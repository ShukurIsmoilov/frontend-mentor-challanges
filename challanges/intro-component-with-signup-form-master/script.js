'use strict';

const formElement = document.getElementById('form');

const showError = (inputEl, errMessageEl) => {
  inputEl.classList.remove('error-input-text');
  inputEl.parentElement.classList.remove('error-label');
  inputEl.nextElementSibling.classList.add('hidden');
  errMessageEl.classList.add('hidden');
};

const hideError = (inputEl, errMessageEl) => {
  inputEl.classList.add('error-input-text');
  inputEl.parentElement.classList.add('error-label');
  inputEl.nextElementSibling.classList.remove('hidden');
  errMessageEl.classList.remove('hidden');
};

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNameInputEl = document.getElementById('first-name-input');
  const firstNameInputErrorMessageEl = document.getElementById('fn-err-mess');
  const lastNameInputEl = document.getElementById('last-name-input');
  const lastNameInputErrorMessageEl = document.getElementById('ln-err-mess');
  const emailInputEl = document.getElementById('mail-input');
  const emailInputErrorMessageEl = document.getElementById('mail-err-mess');
  const passwordInputEl = document.getElementById('password-input');
  const passwordInputErrorMessageEl = document.getElementById('pwd-err-mess');

  if (firstNameInputEl.value.trim() !== '') {
    showError(firstNameInputEl, firstNameInputErrorMessageEl);
  } else {
    hideError(firstNameInputEl, firstNameInputErrorMessageEl);
  }

  if (lastNameInputEl.value.trim() !== '') {
    showError(lastNameInputEl, lastNameInputErrorMessageEl);
  } else {
    hideError(lastNameInputEl, lastNameInputErrorMessageEl);
  }

  if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailInputEl.value.trim())) {
    showError(emailInputEl, emailInputErrorMessageEl);
  } else {
    hideError(emailInputEl, emailInputErrorMessageEl);
  }

  if (passwordInputEl.value.trim() !== '') {
    showError(passwordInputEl, passwordInputErrorMessageEl);

  } else {
    hideError(passwordInputEl, passwordInputErrorMessageEl);
  }
  
  firstNameInputEl.value = firstNameInputEl.value.trim();
  lastNameInputEl.value = lastNameInputEl.value.trim();
  emailInputEl.value = emailInputEl.value.trim();
  passwordInputEl.value = passwordInputEl.value.trim();

});