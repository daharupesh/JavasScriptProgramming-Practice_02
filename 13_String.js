// Collection of characters is strings
//name.length= used to find the length of string
//String is array of characters..
//Template literals....(back tick ``)
//String interpolation = we can insert variable directly in template literal . this is called String interpolation.
// examples : let sentences = `the name is $(name)`;

   // let name1 ="rupesh"
   // let name2 ="Rakesh"
   // let sentence = `${name1} is friend of ${name2}`;
   // console.log(sentence);


  // Scape sequence characters(\')(\n)(\t)(\r)

            // let fruit ='bana\rna'
            // console.log(fruit)

//Java script string method...
// Properties(no paranthesis) and function or method(have paranthesis)
//toUpperCase()..toLowerCase()
//Slicing = namestr.slice(2,4)
//namestr.slice(2)-- start from 2 index to end
//.replace("bhai","bhau")
//.Concat()
//.trip()=used to cut the space
//mdn web doc javascript...
//string is immutable//string return

// let namestr ="Rupesh";
// let name1 = "     Rakesh    "
// console.log(namestr.toUpperCase(namestr));
// console.log(namestr.toLowerCase(namestr));
// console.log(namestr.replace("Ru","ta"));

// console.log(name1);
// console.log(name1.trim());
// console.log(namestr.slice(1,4));
// console.log(namestr.concat("Is my friends"+name1+ "is my enemy"));
// //
//Pracitce sets...
//1.
// console.log("nor\"".length)//4
//2  includes, startswith and endswith function in a string

/*The includes() method performs a case-sensitive
search to determine whether one string may be found
within another string, returning true or false as 
appropriate.*/
            // let sentence="My name is Rakesh kumar Daha"
            // let word ="rupesh"
            // console.log(`The word "${word}"${sentence.includes(word)?" is ":" is not "} in the given sentence `);
            
//Startswith() method

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('sat', 3));
console.log(str1.startsWith('urd', 3));
// expected output: false

//End with methods
const str34 = 'Cats are the best!';

console.log(str34.endsWith('best!'));
// expected output: true

console.log(str34.endsWith('best', 17));
// expected output: true

const str5 = 'Is this a question?';

console.log(str5.endsWith('question?'));
// expected output: false




//





  
  
