// const a = 5;
// const b = 2;
// const veryLongVariableName = 0;
// const myName = "Hailey";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName)




// console.log('hello world') 



//function 기능 배우기1

function sayHello(nameOfPerson, age){
  console.log("Hello! My name is " + nameOfPerson + " and I'm " + age + " years old.")
}

sayHello("yesol", 29); 
sayHello("jangwhan", 27); 
sayHello("ilhyuk", 29); 



function calculator(a, b){
  console.log(a*b)
}

calculator(4,8);
calculator(8,7);


//function 기능 배우기2

const player = {
  name: "nico",/
  sayHello: function (otherPersonsName) {
    console.log("Hello" + otherPersonsName + " nice to meet you!")
  },
};

console.log(player.name);
player.sayHello("yesol");

const hello = 'hello'
