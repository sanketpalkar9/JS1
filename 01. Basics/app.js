/*
let name, whatDoYouWanaBecomeInYourLife, gender, twitterHandle;

name ="Sanket";
whatDoYouWanaBecomeInYourLife="Programmer";
gender = "Male";
twitterHandle = "lifeEnjoyer";

console.log("My name is "+name);
console.log("I want to become a "+whatDoYouWanaBecomeInYourLife);
console.log("I am a "+gender);
console.log("My twitter handle is "+twitterHandle);

*/
/*
let firstNum, secondNum;
firstNum = 24;
secondNum=6;

console.log(firstNum+secondNum);
console.log(firstNum-secondNum);
console.log(firstNum*secondNum);
console.log(firstNum/secondNum);
console.log(firstNum%secondNum);
console.log(firstNum**secondNum);
*/

/*
let isJsProgramingLanguage = true;
let isHard = false;
let num1 = 34;

console.log(isJsProgramingLanguage);
console.log(isHard);
console.log(34+undefined);

// Result is true false NaN (Not a number)  */


/* Relational operators in JS

Greater than
Less than
Greater than equal to 
Less than equal to



console.log(10>10);
console.log(10<10);
console.log(10>=10);
console.log(10<=10);
*/

/* Equality operators in JS

=== -> strict equality (type + value)
== -> loose equality
==! -> strict non-equality (type+value)
=! -> loose non-equality





let num1=4;
let num2 ="4";

console.log(num1===num2);
console.log(num1==num2);
console.log(typeof(num1));
console.log(typeof(num2));


// Result is false, true, number, string

*/
/*

//  Strings
// You can write strings using "",'',``

let firstName = "Sanket ";
let secondName = "Palkar";

// 1. Concatenation 

let fullName = firstName.concat(secondName);
console.log(fullName);

// 2.Append

firstName+= "Something"
console.log(firstName);

// 3.Length

console.log(firstName.length);

// 4.Cases

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. Slicing

firstName = firstName.slice(0,7);   // 7 is excluded like [0,7)
console.log(firstName);

// 6.Split and Join

console.log(firstName.split("")); // Result is array of S a n k e t
console.log(firstName.split("n")); // Result Sa   and   ket
console.log(firstName.split("").join(""));  // Result is Sanket
console.log(firstName.split("n").join("n")); // Result Sanket
console.log(firstName.split(" ").join(" "));  // Result is Sanket

// 7. Includes

console.log(firstName.includes("S")); // Result is true
console.log(firstName.includes("s")); // Result is false

// 8. Trim
let extraSpace = "    Sanket Palkar     ";
console.log(extraSpace.trim());  // Removes the leading and trailing white space and line terminator characters from a string

*/

/*

// backticks ` use

let favActorFirstName = "Chris";
let favActorLastName = "Evans";

let  fullName = favActorFirstName + " " + favActorLastName;
console.log(`${fullName} is a very good Actor`);

*/
/*
// Conversion of types

let money =50;
let money2 = "50";

console.log(typeof(money));
console.log(typeof(money2));


// Convert to string

money = money.toString();
console.log(typeof(money));


//Converting string to decimal

money = "50.45"

money = parseFloat(money);
console.log(typeof(money));

*/

