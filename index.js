// let name = "Sergio";
// let age = 30;
// let isApproved = false;
// let firstName = undefined;
// let selectedColor = null;

// object literal
let person = {
  name: "Sergio",
  age: 30
};

//Dot Notation
person.name = "Mike";

//Bracket Notation
let selection = "name";
person[selection] = "Mary";

console.log(person.name);

// Array

let selectedColors = ["red", "green"];
selectedColors[2] = "yellow";
selectedColors[2] = 1;
console.log(selectedColors.length);

//function()
//Performing a task
function greet(name, lastName) {
  console.log("Hello, " + name + " " + lastName);
}

greet("Sergio", "Rosa");

//Calculating a value
function square(number) {
  return number * number;
}
// let number = square(2);
// console.log(number);
console.log(square(3));
