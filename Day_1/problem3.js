// You're organizing a party and want to keep track of the guest list. Create an array called
// "guestList" and add the names of at least five guests.
//  Then, write a program that checks if a given name is on the guest list. 
//  If the name is found, display "Welcome to the party, [name]!";
//   otherwise, display "Sorry, you're not on the guest list."

var prompt = require('prompt-sync')();
 guestList = ["Rahul","mahi","rohit","rajesh","ramesh"];

 var userInput = prompt("Enter the name of guest: ")

 var result = guestList.indexOf(userInput)

 if(result == -1){
    console.log("Sorry, you're not on the guest list.")
 }else{
    console.log("Index "+result) 
    console.log("Welcome to the party "+guestList[result]) 
 }
 