// problem 1 conditional statement 
// You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"

var prompt = require('prompt-sync')();

var age = prompt("Enter your age to get discount: ")
if(age<18){
    console.log("You get 20% discount!")
}else if(age>=18 && age <65){
    console.log("Normal ticket price applies.")
}else{
    console.log("You get a 30% senior discount!")
}