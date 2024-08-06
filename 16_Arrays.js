// Collections of some items
//This is example of array in javascript
// let class_12 = [91,82,63,64,95,false,"not present"]
// class_12[7]=78//Adding new value in array
// class_12[0]=78//array is mutable data types
// How access value from the array
// console.log(class_12)
// for(let i in class_12){
//     console.log(class_12[i]);
// }
//
// console.log(class_12.length)
// console.log("The length of class 12:",class_12.length)

// // in java array are object it is non primitive data types..
// console.log(typeof(class_12))

// // for loop on array...
// for(let i=0;i<class_12.length;i++){
//     console.log(class_12[i])
// }


// Methods in array
            // let num =[1,2,3,34,4]
//tostring()
            // let b = num.toString()//b is no string
            // console.log(b);
            // for(let i in b){
            //     console.log(b[i])
//}
//Join() method
            // let c = num.join("")
            // console.log(c); // typeof c is string
            // console.log(typeof(c))
            // for(let i=c.length;i>=0;i--){
            //     console.log(c[i])
            // }
            // console.log(num)
// Pop()  method...//It permentaly puped the data
            // let r1 = num.pop()
        
            // console.log(num,r1)
          //  [ 1, 2, 3, 34, 4 ]
         // [ 1, 2, 3, 34 ]
//push() it return the new array elements
        // let arr1 =[ 1, 2, 3, 34, 45 ]  
        //  arr1.push(23)
        // let r = num.push(23) // return the array length
        //  console.log(arr1)
        //  console.log(num,r)
//shift()-> Remove first elemnt and returns
                // let m = arr1.shift() // remover fist element ard return
                // console.log(m, arr1)
//unshift()->adds elements to begins
    //    let n = arr1.unshift(34) // return new lenght
    //    console.log(n,arr1)

//Some more method in javascript...
     //delete() operators or methods 
        //  let num =[1,3,4,34,5,56,7]
        //  let num1 =[23,434,4544,421,46,74,7]
        //  let num2=[523,54,34,54,544,421,46,574,57]

        //  console.log(num.length)
        //  delete num[1]
        //  console.log(num.length)
        //  console.log(num)
    // Concat() used to add methods
                //   let newArray = num.concat(num1,num2,num)//Does not change existing array..
                //   console.log(newArray)
                //   console.log(num)
                //   console.log(num1)

    // Sort()// sort the elements the array or change original array
                    // num.sort()
                    // num1.sort()
                    // num2.sort()
                    // console.log(num)
                    // console.log(num1) // Sort in number order...
                    // console.log(num2)
    //Sort() in order....
        //  const compare=(a,b)=>{
        //     // return a-b; //Accending order
        //     return b-a; // Desending order
        //  }
        //  let num = [34,76,23,877,56,21,32,54]
        //  num.sort(compare)
        //  console.log(num)
   //reverse()
            // let num = [34,76,23,877,56,21,32,54]
            // // let b =num.reverse()
            // console.log(num)
  //Splice and slice method
            // let num = [34,76,23,877,56,21,32,54]
        //    let b= num.splice(2,3,1023,1034,1035) // retun deleted aray and modify source array
        //     console.log(num)         
        //     console.log(b)
            // splice("Starting index","removable elemts number","added elements in sequence")
//Slice()--Methods..
//    create new array
                //    let newnum= num.slice(3,5)
                //    let newnum1= num.slice(3)

                //     console.log(num)
                //     console.log(newnum)
                //     console.log(newnum1)
// For loop with Arrays in javascript

// let num = [3,5,1,2,4]
//classical for loop


//for each loop
// num.forEach((element)=>{|
//     console.log(element * element)})

            // num.forEach(i=>{
            //     console.log(i);
            // })

            // num.forEach((element)=>{
            //     console.log(element*element);
            // })
//array from
           /* let name1 = "rupesh"
            let arr=Array.from(name1)
            console.log(arr)*/
//for of
         /*  for(let i of num){
                console.log(i);
            }*/

//for in
     /*  for(let i in num){
        console.log(`(${i},${num[i]})`);
       }*/
            
 //Map, Filter and Reduce in javascript...               
      
//Map()... Function // map return new array but for loop used to perform some operation

            // const a =[1,2,3,45]
            // let b=a.map((value,index,array)=>{//have three parameter value index and array
            //     console.log(value,index,array)//same thing can do by for each loop
            //     return value+index;

            // })
                //console.log(b)

//Array filter method
        // let arr2=[12,3,4,45,56,34,12,34,23,15,67,34]
        // let a=  arr2.filter((a)=>{
        //     return a<20;
        // })
        //Not change the original array
        // console.log(arr2);
        // console.log(a);
//Array Reduce method //this function used too add the all the value of the fuction..
//    let arr1=[1,2,3,4,5,6,7,8,9,10]
//    const reduce_func=(h1,h2)=>{
//          return h1+h2;
//    }
//    let newarr=arr1.reduce((h1,h2)=>{
//        return h1+h2;
//    })
    //    let newarr=arr1.reduce(reduce_func)
    //    console.log(newarr);

//array practice sets
// chapeter 5
//  1.Create an array of numbers and take input from the user to add numbers to this array
                // let num = [3,5,1,2,4]
                // console.log(num)
                // const readline=require("readline-sync");
                // for(let i=0;i<10;i++){
                //     let a = Number(readline.question("Enter the  new num: "))
                //     num.push(a)}
                // console.log(num);
//Keep adding numbers to the array in i until o is added to the array

            // const readline=require("readline-sync");
            // let a;
            //  while(a!=0){
            //     a = Number(readline.question("Enter the number:"))
            //     if(a!=0){
            //         num.push(a)
            //     }
    //Do while loop
    // let num=[3,5,1,2,4]
    // let a;
    // do{
    //     const readline = require("readline-sync");
    //     a=Number(readline.question("Enter the number: "));
    //     if(a!=0)
    //     num.push(a);
    //   } while(a!=0);
    // console.log(num)

// Filter for numbers divisible by 10 from a given array.
                    // let num =[10,20,23,34,40,50,34,78,100,60]

                    // let a =num.filter((number)=>{
                    //     return number%10==0;
                    // })
                    // console.log(a)
//Create an array of square of given number...
       //map()
            // let number=[1,2,3,4,5,6,7,8,9,10]
            // let b =number.map((i)=>{
            //     return (i*i)
            //     })
            // console.log(b);   
// Use reduce to calculate factorial of a given number from an array of first n natural number(n being the number whose factorial need to be calculate)
let natural_num=[]
const readline = require('readline-sync');
let factnum=Number(readline.question("Enter the number:"))
for(let i=1;i<=factnum;i++){
    natural_num.push(i);
}
console.log(natural_num)
let Factor = natural_num.reduce((h1,h2)=>{
    return h1*h2;
})
console.log("Factorial of "+factnum+" is "+Factor);



    






