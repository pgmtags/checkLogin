// Заранее заданные значения логина и пароля
const correctUsername = "admin";
const correctPassword = "password123";

// Функция для проверки логина и пароля
function checkLogin(username, password) {
  if (username === correctUsername && password === correctPassword) {
    console.log("Вход выполнен успешно!");
  } else {
    console.log("Неправильный логин или пароль.");
  }
}

// Пример использования функции checkLogin
const enteredUsername = prompt("Введите логин:");
const enteredPassword = prompt("Введите пароль:");

checkLogin(enteredUsername, enteredPassword);