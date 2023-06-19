//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//const name = prompt ("What is your name?")
  //console.log (`Hey there ${name}`);

// Problem 1: Write a program that prompts the user for a number and determines if it is positive, negative, or zero.
/**let number = prompt ("Give me a number!");
if (number < 0) {
  console.log ("That is a NEGATIVE number");
}
if (number > 0) {
  console.log ("That is a POSITIVE number");
}
if (number === "0") {
  console.log ("That is ZERO");
}
else {
  console.log ("That is not a number")
}
*/



// Problem 2: Write a program that prompts the user for a number and determines if it is even or odd.
/**const number = prompt ("Give me a number!");
  if (number % 2 == 0){
    console.log ("That is an EVEN number");
  }
  else if (number % 2 !== 0){
    console.log ("That is an ODD number");
  }
*/


// Problem 3: Write a program that prompts the user for a letter and determines if it is a vowel or a consonant.
/**const letter = prompt ("Give me a letter!"). toLowerCase();
  if ((letter == "a") || (letter == "e") || (letter == "i") || (letter == "o") || (letter == "u")) {
    console.log ("That is a vowel");
  }
 if (letter == "y") {
  console.log ("That's a vowel but only sometimes :)");
 }
else {
  console.log("That is a consonant")
}
*/

// Problem 4: Write a program that prompts the user for a number and checks if it is between 1 and 10 (inclusive).
/**const numbers = prompt ("Give me a number from 1-10!");
    if ((numbers >= 1) && (numbers <= 10)) {
        console.log ("That is correct!")
    }
    else if ((numbers < 1) || (numbers > 10)) {
      console.log ("That is not correct!")
  }
 */ 


  // Problem 5: Write a program that prompts the user for a number and checks if it is between 50 and 100 (inclusive).
 /**  const numbers = prompt ("Give me a number from 50-100!");
    if ((numbers >= 50) && (numbers <= 100)) {
        console.log ("That is correct!")
    }
    else if ((numbers < 50) || (numbers > 100)) {
      console.log ("That is not correct!")
  }
*/

// Problem 6: Write a program that prompts the user for a password and checks if it is correct (password should be "password123")
/**const pw = prompt ("What's the password, gonk?");
if (pw=="password123"){
  console.log ("Nova, you're chippin in")
}

else {
  console.log ("Try again or pay me eddies")
}
*/


//Problem 7. Write a program that prompts the user for a number and checks if it is a multiple of 3.
/**const number = prompt ("Give me a multiple of 3") ;
if (number % 3 === 0){
  console.log ("Bingo!")
}
else {
  console.log ("Try again")
}
*/

//Problem 8. Write a program that prompts the user for their age and checks if they are eligible for a senior discount (age 65 and up).

/**const age = prompt ("And how old are you young man/lady?")
if (age >= 65) {
  console.log ("Winner winner chicken dinner! Here's your discount you old fart");
}

else {
  console.log ("Come back in a few years youngster")
}
*/

//Problem 9. Write a program that prompts the user for their birth year and determines if they are a millennial (born between 1981 and 1996).
/**const year = prompt ("What year were you born in?");
    if ((year >= 1981) && (year <= 1996)) {
        console.log ("Congrats! You're a millenial!")
    }
    else if (year < 1981) {
        console.log ("Hello Boomer :(")
  }
    else if (year > 1996) {
        console.log ("Hello Zoomer :)")
}
*/

//Problem 10: Write a program that prompts the user for their age and checks if they are a teenager (ages 13-19).
/**const age = prompt ("How old are you?");
    if ((age >= 13) && (age <= 19)) {
        console.log ("Hello teen, enjoy the youth")
    }
    else if ((age < 13) || (age > 19)) {
      console.log ("Congrats, teen angst is not upon you")
}
*/

//Problem Write a program that prompts the user for their favorite color and prints a message based on their choice.
/**const color = prompt ("Whats your favorite color?"). toLowerCase();;
if (color == "red"){
  console.log ("You are a passionate person")
}

else if (color == "blue"){
  console.log ("You are a empathatic person")
}

else if (color == "green"){
  console.log ("You are a curious person")
}

else if (color == "purple"){
  console.log ("You are a charismatic person")
}

else if (color == "yellow"){
  console.log ("You are a responsible person")
}

else if (color == "orange"){
  console.log ("You are a witty person")
}
*/