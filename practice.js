const a = 5;
const b = 2;
const veryLongVariableName = 0;
const myName = "Hailey";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName)

console.log('hello world')

//function 기능 배우기1

function sayHello(nameOfPerson, age) {
  console.log(
    "Hello! My name is " + nameOfPerson + " and I'm " + age + " years old."
  );
}

sayHello("yesol", 29);
sayHello("jangwhan", 27);
sayHello("ilhyuk", 29);

function calculator(a, b) {
  console.log(a * b);
}

calculator(4, 8);
calculator(8, 7);

//function 기능 배우기2

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("yesol");
player.sayHello("ILHYUK");

const hello = "hello";

//Recap1

const a = 5; //항상 사용
let isNicoFat = true; //때때로 사용
var //절대 사용 금지

const a = null;
const day = [1, false, true, null, "potato"];
console.log(day[4]);
day.push("one");
console.log(day);

parseInt("hello");
console.log(parseInt);

if (false) {
  console.log("hi");
} else {
  console.log("bye");
}
if (8 > 10) {
  console.log("hi");
} else if (8 < 10) {
  console.log("hello");
} else {
  console.log("bye");
}
8 > 5 && 10 > 20;

const person = {
  name: "YESOL",
  age: 98,
};
console.log(person);
person.name = "Ilhuk";
console.log(person);
person.cute = "soon";

//계산기 만드는 방법111

function plus() {
  console.log(2 + 2);
}
plus();

function minusFive(potato) {
  console.log(potato - 5);
}

minusFive(10, 10, 12, 34, 4, 5, 6, 7); //potato 자리의 10만 작용함.

const calculater = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculater.add(5, 1);
calculater.minus(3, 2);
calculater.div(8, 2);
calculater.multi(5, 10);
calculater.power(2, 8);

//Return의 기능
age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

//계산기 만드는 방법222

function plus() {
  console.log(2 + 2);
}
plus();

function minusFive(potato) {
  console.log(potato - 5);
}

minusFive(10, 10, 12, 34, 4, 5, 6, 7); //potato 자리의 10만 작용함.

const calculater = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculater.add(2, 3);
const minusResult = calculater.minus(plusResult, 10);
const divResult = calculater.div(10, minusResult);
const multiResult = calculater.multi(5, divResult);
const powerResult = calculater.power(2, multiResult);

console.log(powerResult);


 