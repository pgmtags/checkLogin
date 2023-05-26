// Заранее заданные значения логина и пароля
const correctUsername = "admin";
const correctPassword = "password123";

// Функция для проверки логина и пароля
function checkLogin(username, password) {
  if (username === correctUsername && password === correctPassword) {
    console.log("Login successful!");
    alert("Login successful!");
  } else {
    console.log("Error login.");
    alert("Error login.");
  }
}

// Функция для обработки события нажатия кнопки Login
function validateLogin() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  checkLogin(enteredUsername, enteredPassword);
}

function register() {
  // Ваш код для обробки натискання кнопки реєстрації тут
  console.log("Register button clicked!");
  alert("Register button clicked!");
}