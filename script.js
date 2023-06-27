const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password-confirmation');
const noMatchSpan = document.querySelector('.no-match');
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    noMatchSpan.textContent = '*Passwords do not match';
    passwordInput.style.borderColor = 'red';
    confirmPasswordInput.style.borderColor = 'red';
  } else {
    noMatchSpan.textContent = '';
  }
});

