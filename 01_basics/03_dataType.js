"use strict" // -> this tell us that your are writing the whole code in the newer version of the javaScript

// alert( 3 + 3 );// -? this cannot be work in the runtime enviornment 

console.log(3
    +
   3   //this is also working but readibility of the code is to be high
);

// note -> so we have to follow good practice
console.log("Welcome ! ");

let name = "Rajneesh verma";
let age = 19;
let isLoggedIn = true;
let state = null;

/*
// primitive ->
1
number -> used to store integer value
string -> use to store string value -> either use " " or ' '
bigint -> use to store big integer whose scope is more than number
null -> standalone value
undefined ->value not assigned yet

symbol -> when we want uniqueness


// non primitive data type
// object -> we do imn details in another videos

*/

// typeof() -> is a function used to print the type of the data type
console.log(typeof(null)) //object
console.log(typeof(undefined)) //undefined

// we can also use 'typeof' like this
console.log (typeof name); //string
console.log (typeof age); //number
console.log (typeof isLoggedIn); //boolean

// homework -> go to documentation and and explore more about the data types in th javascript
// 1. tc39.es -> oficial documentation
// 2.mdn -? unofficial documentation written by the firefox
