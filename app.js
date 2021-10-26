//case1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//case2
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name!!");
//   } else if (username.length > 15) {
//     alert("Your name is too long.");
//   }
//   console.log("Hello!", loginInput.value);
//   console.log("click!!!");
// }

loginButton.addEventListener("click", onLoginBtnClick);
