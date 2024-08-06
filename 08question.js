// 1.Use logical operator to find whether the age of a person lies between 10 and 20?
 

const readline = require("readline-sync");
// const age = Number(readline.question("Age of person:"));
// // logic age lies between 10 and 20
// if(age >10 && age<20){
//     console.log("The age of person lies between 10 and 20");
// }

// else{
//     console.log("Age not lies between 10 and 20");
// }

// Q2. Demonstrate the use of switch case statements in javascript

// const a =Number(readline.question("Enter a:"));
// const b =Number(readline.question("Enter b:"));
// const op = readline.question("Enter operator: ");
// switch(op){
//     case '+':
//              console.log("the sum of a and b is:",a+b);
//              break;
//     case '-':
//              console.log("the sum of a and b is:",a-b);
//              break;
//     case '/':
//              console.log("the sum of a and b is:",a/b);
//              break;
//     case '*':
//              console.log("the sum of a and b is:",a*b);
//              break;
//     default:
//             console.log("Invalid!");
//             break;         
// }
//q3. Write a java script program to find whether a number is divisible by 2 and 3.

// let num = Number(readline.question("Enter the number: "));
// if(num%2==0 && num%3==0){
//     console.log("The number is divisible by 2 and 3");
// }
// else{
//     console.log("Number is not divisible by 2 and 3");
// }

//Q4. Write a javascript program to find whether a number is divisible by 2 or 3.

// let num = Number(readline.question("Enter the number: "));
// if(num%2==0 || num%3==0){
//     console.log("The number is divisible by either 2 or 3");
// }
// else{
//     console.log("Number is not divisible by 2 and 3");
// }

//you can drive or not age 18?

let age = Number(readline.question("Age of the person"));
let a = (age>18)? " you can drive. ":" you can not drive.";
console.log(a);