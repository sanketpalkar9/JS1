/*
//-------------------------- Conditionals--------------------------

// let a=10;
// let b=20;

// if (a>b){
//     console.log("a is greater than b");
// }
// else if (b>a){
//     console.log("b is greater than a");
// }
// else{
//     console.log("a is equal to b");
// }

let password="";
if(password.length===8){
    console.log("Welcome");
} 
else if (password.length<8){
    console.log("Password is too short");
}else if (password.length>8){
    console.log("Password too long");
    console.log("Password should be 8 characters");

}else {
    console.log("Please provide a password");
}



// Ternary Operator
// let c=30;
// let d=40;
// let result = c>d ? "c is greater than d" : "d is greater than c";
// console.log(result);

*/
/*
//------------------- Switch Case ----------------------------

// let x =0;
// let text;

// switch (x) {
//     case 0:
//         text ="off";
//         break;
//     case 1:
//         text ="On";
//         break;

//     default:
//         text = "no value found";
//         break;
// }

// console.log(text);

// let day="Monday";

// switch(day){
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Saturday":
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
//         break;

// }


let fruit ="banana";

switch(fruit){
    case "banana":
        console.log("Banana is good");
        break;
    case "orange":
        console.log("I am not a big fan of orange")
        break;
    case "apple":
        console.log("How you like then apples?");
        break;
    default:
        console.log("I have never heard of that fruit before");       
}

*/
/*
//-------------------Loops---------------------

// for loop

// for (let i=1;i<=10;i++){
//     console.log(i);
// }

// Nested Loops
// let rows = 6;
// let columns = 6;
// for(let i=0;i<rows;i++){
//     for (let j=0;j<columns;j++){
//         console.log(`(${i},${j}) `);
//     }

    
// }

// let rows = 6;
// let columns = 6;
// for(let i = 0; i < rows; i++) {
//     let pattern = "";
//     for(let j = 0; j < columns; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }


// While Loop

// let i=1;
// while(i<5){
//     console.log(i);
//     i++;
// }


// let i=10;
// while(i<20){
//     console.log("Sanket",i);
//     i++;
// }


// do while loop


// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<6)

*/
/*
//------------------------------ARRAYS----------------------------------------


// let arr =[1,2,3,4,5,6,7,8]

// console.log(arr);
// // Result is full array

// console.log(arr[2]);

// NESTED ARRAYS

let arr = [1,3,[4,6,7,8],4,7];

console.log(arr);
console.log(arr[2][3]);
//Result is 8;

*/


const fruits = [
    "apples",
    "mango",
    "Strawberry",
    "promogrante",
    "pineapple"
]
console.log(fruits);
fruits.push("Banana");      // Push in the last element
console.log(fruits);
fruits.pop();             // Pops last element here banana
console.log(fruits);
fruits.shift();           // Removes first element here apples
console.log(fruits);
console.log(fruits.shift())   // Returns first element

