// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using
// the formula: area = length * width'.
var prompt = require('prompt-sync')();

var length = prompt("Enter length of rectangle in cm: ")
var width = prompt("Enter width of rectangle in cm: ")
var area = length*width

console.log("Area of rectangle with legnth "+length+ " cm and width "+width+" cm is "+area+" cm2")