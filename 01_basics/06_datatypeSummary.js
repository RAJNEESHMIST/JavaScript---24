// data types bascally categorize  in two types
// 1.primitive -. these are pass by value
//  7 - types -> String , Number, Boolean, null, undefined , symbol,bigInt

// note -> javascript -> dynamically typed language
const name = "Rajneesh";
const score = 100; //here we do not say that score is the number data type or anything else
const scoreVal = 100.67; //decimal and normal number are come in Number category
const isLoggedIn = false ; //boolean
const outsideTemp = null; //null type-> not mean 0
let userEmail; //by deafult this is the undefined data type
// let userEmail= undefined; //both are same

// symbol -> for making a single value unique even they are same
// we use symbol() -> which return the symbol data type
const id = Symbol('Mist222');
const anotherId = Symbol('Mist222')
// console.log(id === anotherId); //it gives result false even both id are same

const bigNumber = 4564645341867456498n; //we have to write n at the en of the number
// console.log(bigNumber)

// 2. non - primitive  or Rference type -> these are pass by value
// 3 - types -> Array, Objects, Functions

// array-
const hero =["Rajneesh","Divya","Anshu","Reeta"];
console.log(hero)

// object
let userDetail={
    "user":"Mist22",
    "Pass":"Password@299",
    "contact":8756699455,
    "city":"Ambedkar Nagar"
}
console.log(userDetail["user"]) //we can access object value by key

// function -> function can be decalre as many ways
// it can be treated as variable
const myFunction = function(){
    console.log("Hello Rajneesh....")
}

myFunction();

// console.log("Data type return by the typeof() function -primitive ->")
// console.log("Number -> ",typeof(score));
// console.log("Boolean -> ",typeof(isLoggedIn));
// console.log("Undefined -> ",typeof(userEmail));
// console.log("Symbol -> ",typeof(id));
// console.log("Null -> ",typeof(outsideTemp));
// console.log("String -> ",typeof(name));
// console.log("BigInt -> ",typeof(bigNumber));


// console.log("Data type return by the typeof() function - non-primitive ->")
// console.log("Array -> " ,typeof(hero))
// console.log("Object -> " ,typeof(userDetail))
// console.log("Function -> " ,typeof(myFunction))

// ++++++++++++++++++++++++++  Stack And Heap ++++++++++++++++++++++++++++++
// stack(primitive)-in the stack we obtain a copy of that varible means no change will reflect to orginal ,
//  heap(Non - primitive) -> we obtain a reference means change reflects directly to the orginal varible


// stack
let userName = "Mist299"
let newUser = userName;
// console.log(userName);
// console.log(newUser);

// now we change in the newUser -> it not get reflected to the userName -> b/c of copy of the userName pass to the newUser variable

newUser = "Chemm23";
// console.log(userName);
// console.log(newUser);

// now we see that the newUser value change but userName value remain unchanged

let user ={
    "email":"abc@gmail.com",
    "upi":"rajneesh@verma",
    "contact":87566994456
}

console.log(user);
// user["contact"]=8756699455;
let user2 = user;
user2["contact"] = 8756699455
// now we see that the change were reflected in the orginal object
console.log(user);

