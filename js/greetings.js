const loginForm = document.getElementById('login-form');
const greetings = document.getElementById('greetings');
const loginInput = document.getElementById('username');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greetings.innerText = `Hello ${username}`;
  greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.info('save', savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}