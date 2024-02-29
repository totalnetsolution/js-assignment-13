// assignment 1

// Q no. 1 Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3

var num = 3;
prompt("Please Enter Your Number");
if (num % 3 === 0) {
        console.log("Number is divisible by 3");
} else {
    console.log("Number is not divisible by 3");
}

// assignment 2

// Q no. 2 Write a program that checks whether the given input is an even number or an odd number

const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}

// assignment 3

// Q no. 3
// Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough",  otherwise output "Too young".

const age = prompt("Please Enter Your age");
if (age > 17 ) {
    console.log( "Old enough" );
} else {
    console.log( "Too young" );
}


// assignmemt 4

// Q no.  4 
// Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the  same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.

let answer = prompt('Please Enter Your Name');

if (answer === 'Muhammad Danish') {
  alert('Assalam u Alikum Muhammad Danish');
} else {
  alert('Incorrect Username');
}

// assignment 5

// Q no 5
// Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements. Show a message “Number is not divisible by 3” or “Number is divisible by 3”.

var num = 3;
prompt("Please Enter Your Number");
if (num % 3 === 0) {
        console.log("Number is divisible by 3");
} else {
    console.log("Number is not divisible by 3");
}

// Q no 6
// Write a program that takes a character(number or string) in variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:-A=65, Z=90, a=97, z=122)


function check(character) {
    if (character >= "A" && character <= "Z")
      console.log(character + 
      " is an UpperCase character");
    else if (character >= "a" && character <= "z")
      console.log(character +
      " is an LowerCase character");
    else console.log(character + 
    " is not an alphabetic character");
  }
   
  var character;

  character = "A";
   
  check(character);
   
  character = "a";
   
  check(character);
   
  character = "0";
   
  check(character);
   
// Q no 7
// Write a program to create a calculator for +, -, *, /, % using switch case statements. (number1, number2 and operator will be input)

const operator = prompt('Enter operator ( either +, -, * or / ): ');


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);


// Q no 8
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements



// Q no 9
// Write a program that takes a calendar year in YYYY format in a variable. Check & notify the user whether it is a leap year or not.

function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const year = prompt('Enter a year:');

checkLeapYear(year);

// Q no 9
// Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise

function CheckPassword(input_text) 
{ 
var password=  danishilyas;
if(input_text.value.match(password)) 
{ 
alert('Correct Password')
return true;
}
else
{ 
alert('Incorrect Password...!')
return false;
}
}

