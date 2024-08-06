// 7 types of primitive data types
//nnssbbu  null,number,symbol,string,boolean,bigint,undefined

//Data types-which variable can store which data types
// Types of primitive and non-primitve data types

let a = null;
let b = 345;
let c = true;
let d = BigInt("574") + BigInt("6")
let e = "Rupesh Kumar Daha";
let f = Symbol("I am a nice sysbol");
let g ;
console.log(a,b,c,d,e,f,g)
console.log(typeof(c))


// non-primitive data types is combination of primitive data types
// Objects in js ..it is like dictionary in python
const item ={
    "Rupesh" : true,
    "Shubh" : 67,
    "Lovish" :undefined
}

console.log(item["Lovish"])