const name = "Rajneesh verma."
const email = "rajnees@verma.com"

// console.log("Name : "+name +" Email : "+email); //this is the old syntax don't use it now

// for modern syntax we use backticks (` `)
console.log(`Name : ${name}. Email : ${email}`)

// note -> result wise both are same but 2nd one is more readable recommend to use modern syntax

const college = new  String("Chandigarh University");
console.log(college[0]);
console.log(college.__proto__);

// we can also find lenght easily
console.log("Size : ",college.length)
console.log(`Size : ${college.length} `)
console.log(college.toLowerCase()) // change into lower case
console.log(college.toUpperCase())
console.log(college.charAt(5))
console.log(college.indexOf('a'))

// we can use any of the syntax

const nme = "Rajneesh verma";
const place = "Ambedkar Nagar";
// old syntax to print string along with variable or string concatenation
console.log("My name is",nme,"i live in "+place+".");
// console.log(nme,place);
// we can also concatenate using comma working same like + operator

// modern syntax - 
console.log(`My name is ${nme} and i live in ${place}.`);
// we can also use methods with it at smae time as
console.log(`My name is ${nme.toUpperCase()} and i live in ${place.toLocaleUpperCase()}.`);

const uid = new String("23BCS80093");
// this type of the decalaration return string as object and provide many function and prototype function
console.log(uid);
// like these
console.log(uid.length);

// syntax to access the prototype function as
console.log(uid.__proto__);
// we can access the prototype method without this syntax
console.log(uid.toLowerCase());
console.log(uid.toUpperCase());

const student = new String("Rajneesh");
const newStr = student.substring(0,4);
// console.log(student.substring(0,5)); //we can also do that same
console.log(newStr);

const anotherString = student.slice(-5,4);
console.log(anotherString);

const girl = "   Anshu  ";
console.log(girl);
// console.log(girl.trim());

console.log(girl.trimStart()+"Rajneesh");
console.log(girl.trimEnd()+"Rajneesh");

const url = "https://Rajneesh//%30vema.com";
console.log((url.replace("Rajneesh","Anshu")));

console.log(url.includes("Rajneesh"))


const frnd = "Anshu-Rajneesh-Senthil-Manu-Reena-Pima";
console.log(frnd.split("-"));
const frnds = "Anshu*Rajneesh-Senthil*Manu-Reena-Pima";
console.log(frnds.split("*"));
// ----------------- Mastring String --------------------------

// string constructor
// 1. String() -> used to create a string object
// for example
const str1 = new String("Rajneesh")
const str2 = String("Rajneesh")

// console.log(str1 instanceof String);
// console.log(str2 instanceof String);
// instanceof - return true if that string belong to the string otherwise false
// console.log(typeof(str1));
// console.log(typeof(str2));

// string static method
// 1.String.fromCharCode(pass any number of code) -> return the corresponding string of the code
// console.log(String.fromCharCode(98,999,100,67))

// 2.String.fromCodePoint (pass code) - this also return the corresponding string of the code
console.log(String.fromCodePoint(23,453,45643));




