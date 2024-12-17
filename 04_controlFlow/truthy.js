const mail = "rajneesh@gmail.com"
if(mail) console .log("Got mail");
else console.log("Not got mail.")

//here the concept of truthy and false values introduced 
//no we write some fale value and them truthy value

//false values - false , 0 ,-0, bigInt, On, "", null, undefined, Nan 

// except these false values everything treat as true

// some important truthy values
// "0",'0','false'," "(imp),[],{} function(){}

//let's do some example 

// if(false) console.log("False conside true");
// else console.log("False conside false");

// if(0) console.log("0 consider true.");
// else console.log("0 consider false.");

// if(-0) console.log("-0 consider true.");
// else console.log("-0 consider false.");

// if(0n) console.log("BigInt like (0n) consider true");
// else console.log("BigInt like (0n) consider false");

// if("") console.log(`empty string ("") consider true`);
// else console.log(`empty string ("") consider false`);

// Note - but the string containing only sapce consider as true ("" -> this is empty string where as " " -> this is non empty string)
// if(" ") console.log(`empty string ("") consider true`);
// else console.log(`empty string ("") consider false`);

// if([] && {} && '0' && 'false') console.log("These all consider as true");
// else console.log("These are consider as false");


// how we check the emptyness of the array or an object

//array emptyness
 
// let arr = [3];
// if(arr.length === 0) console.log("Array is empty.");
// else console.log("Array is not empty.");

//object emptyness - we can also check the emptyness of object
const obj = {user:"Rajn"};
//we know that object.keys(obj) - return the array of the key and we know that how we check the emptyness of array 
// if(Object.keys(obj).length === 0){
//     console.log(`object is empty`);
// }
// else{
//     console.log(`object is not empty.`)
// }

// some important expression for interview
// if(false == 0) console.log(`true`);
// if(false == '') console.log(`true`);
// if('' == 0) console.log(`true`);

// Nullish coalescing operator (??) - not ternary

// in the the first value other than null or undefined assign to the variable

let val;
val = null ?? 10 // 10
console.log(val)

val = undefined ?? 78 // 78
console.log(val)

val = null ?? undefined ?? 89 ?? 86 // assigned very first non zero value
console.log(val)


//ternary operator
//syntax - condition ? true -> execute when condition true : false -> execute when condition false
let age = 89;
age > 80 ? console.log("Overaged") : console.log("Adult");