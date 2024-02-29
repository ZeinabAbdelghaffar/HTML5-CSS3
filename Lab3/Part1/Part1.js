function validateForm() {
  var username = document.getElementById('username');
  var email = document.getElementById('email');
  var usernameError = document.getElementById('username-error');
  var emailError = document.getElementById('email-error');
  var isValid = true;

  // Check username
  if (!/^[A-Za-z]+$/.test(username.value)) {
    username.classList.add('error');
    usernameError.style.display = 'block';
    isValid = false;
  } else {
    username.classList.remove('error');
    usernameError.style.display = 'none';
  }

  // Check email
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    email.classList.add('error');
    emailError.style.display = 'block';
    isValid = false;
  } else {
    email.classList.remove('error');
    emailError.style.display = 'none';
  }

  return isValid;
}
