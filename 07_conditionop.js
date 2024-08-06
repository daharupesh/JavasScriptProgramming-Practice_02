// conditional statement in javascript...
// 1.IF statement
// 2.If...else statement
// 3.If...else if ....else statement
const readline = require("readline-sync");
let a = readline.question("Marks in Software Engineering:");

// // let a = Prompt("Hey whats your age?");
// // a = Number.parseInt(a);
// // var a = readInt("writhe your name:")
// // coditional statement
// if(a<=0){
//     console.log("This is invalid age");
// }
// else if(a<9){
//     console.log("you are kids you can not even think driving");
// }
// else if(a>9 && a<=18){
//     console.log("you are kids you can think after 18");
// }
// else{
//     console.log("you can now drive as you are above 18");
// }

// console.log("Done!");
// // full form of npm node package manager ...install promt---npm install promt


switch(a){
    case 'mango':
        console.log("this is mango");
        break;
    case 'orange':
        console.log("this is orange");
        break;
    case 'papaya':
        console.log("this is papaya");
        break;
    case 'apple':
        console.log("this is apple");
        break;
    default:
        console.log("note match");
        break;    

}