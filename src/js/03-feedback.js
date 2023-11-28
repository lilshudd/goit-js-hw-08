import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
