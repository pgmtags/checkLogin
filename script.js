// Account, !temporary!
const correctUsername = "admin";
const correctPassword = "password123";

// Functions for validating login
function checkLogin(username, password) {
  if (username === correctUsername && password === correctPassword) {
    console.log("Login successful!");
  } else {
    console.log("Error login.");
  }
}

// Function for validation a button press
function validateLogin() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  checkLogin(enteredUsername, enteredPassword);
}

/*
// Function to register a user
function register() {
  console.log("Register button clicked!");
  alert("Register button clicked!");
}
*/