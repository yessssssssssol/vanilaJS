const age = prompt("How old are you?"); //css적용 불가능

console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age)); //숫자가 아니다.

const age = parseInt(prompt("How old are you?"));

&& and
|| or
true || true === true;
false || true === true;
true || false === true;
false || false === false;

true && true === true
false && true === false
true && false === false
false && false === false

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else {
  console.log("You can't drink");
}


//CSS in JS

const h1 = document.querySelector("h1");

function handleMouseEnter() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleMouseEnter);
