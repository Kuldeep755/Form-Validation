// get elements from the DOM
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// add event listeners to the forms
loginForm.addEventListener("submit", login);
registerForm.addEventListener("submit", register);

// define login function
function login(event) {
  event.preventDefault(); // prevent form submission
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  // perform login authentication logic here
  console.log(`User with email ${email} has logged in.`);
}

// define register function
function register(event) {
  event.preventDefault(); // prevent form submission
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  // perform registration logic here
  console.log(`User with name ${name}, email ${email}, and password ${password} has registered.`);
}
``
