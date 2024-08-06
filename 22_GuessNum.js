/* write a javascript program to generate a random number and store it in a variable.
The program then takes input from the user to tell them whether the guess was correct,
greater, or lesser than the Original number.
100-(no of guesses)is the score of the user the program is expected to terminate once the number is
the number is guessed. The number should be between 1-100. */


function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}
let cout1=0;
const readline = require("readline-sync")
let radnumber = randomNumber(100,400);
// console.log(radnumber)
let guessednumber=0;
//let exactlength=0;
let start1=100;
let end1=400;
do{
    guessednumber=Number(readline.question("Enter the number between "+start1+" and "+end1+":"))
    cout1++;
    if((guessednumber-radnumber)>0){
       // exactlength = guessednumber-radnumber;
        end1=guessednumber;
        console.log("remember! matched number is between "+end1+" and "+start1)
         
         // console.log(exactlength);
    }
    else if((guessednumber-radnumber)<0){
        start1 = guessednumber;
        console.log("remember! matched  number is between "+end1+" and "+start1)
       // let exactlength1=radnumber-guessednumber;
       // console.log(exactlength1)

    }
    else if((radnumber-guessednumber)==0)
    {
        console.log("score is "+(100-cout1))
    }
    

} while(radnumber!=guessednumber)
console.log("Congratualtion you win the game");


// l1=[2,4,5,6,7,8,9,12]
// const readline = require("readline-sync")
// console.log(l1)
// let x =Number(readline.question("Enter the value:"))

// function Lsearch(arr,x){
//     for(let i=0;i<l1.length;i++){
//         if(arr[i]==x){
//             return i;
//         }
//         else{
//             console.log(arr[i]);
//             return "not found"
//         }
//     }
// }
// console.log("The index is :",Lsearch(l1,x))

// rock paper sesor
// temperature conversion