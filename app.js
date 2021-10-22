// const age = prompt("How old are you?"); //css적용 불가능

// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age)); //숫자가 아니다.

// const age = parseInt(prompt("How old are you?"));

// && and
// || or
// true || true === true;
// false || true === true;
// true || false === true;
// false || false === false;

// true && true === true
// false && true === false
// true && false === false
// false && false === false

// if (isNaN(age) || age < 0) {
//   console.log("Please write a number");
// } else if (age < 18) {
//   console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink");
// } else {
//   console.log("You can't drink");
// }

// //CSS in JS

// const h1 = document.querySelector("h1");

// function handleMouseEnter() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleMouseEnter);

// //css in JS

// const h1 = document.querySelector("h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);

// //CSS IN JS3

// const h1 = document.querySeclector(h1);

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(ClickedClass);
//   }
// }

// h1.addEventListener("click", handleTitleClick);

// //css in js4

// const h1 = document.querySeclector(h1);

// function handleTitleClick() {
//   h1.classList.toggle("clicked")

// h1.addEventListener("click", handleTitleClick);

// const body = document.querySelector(body);

// function winBGChange() {
//   const windowSize = window.innerWidth;
//   console.log(windowSize);
//   if ((windowSize) => 800) {
//     document.body.style.backgroundColor = "blueviolet";
//   } else if (windowSize < 800 && windowSize > 400) {
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "skyblue";
//   }
// }

// window.addEventListener("resize", winBGChange);

// const body = document.querySelector("body");

// function changeBGColor() {
//   if (window.innerWidth => 800) {
//     body.classList.remove("meddle", "small");
//     body.classList.add("large");
//   } else if (window.innerWidth => 450 && window.innerWidth < 800) {
//     body.classList.remove("small", "large");
//     body.classList.add("medium");
//   } else if (window.innerWidth < 450) {
//     body.classList.remove("medium", "large");
//     body.classList.add("small");
//   }
// }
// window.addEventListener("resize", changeBGColor);

//과제
const body = document.querySelector("body");

function changeBGColor() {
  if (window.innerWidth < 600) {
    body.classList.remove("meddle", "large");
    body.classList.add("small");
  } else if (600 <= window.innerWidth && window.innerWidth <= 1000) {
    body.classList.remove("small", "large");
    body.classList.add("medium");
  } else if (1000 < window.innerWidth) {
    body.classList.remove("small", "medium");
    body.classList.add("large");
  }
}
window.addEventListener("resize", changeBGColor);
