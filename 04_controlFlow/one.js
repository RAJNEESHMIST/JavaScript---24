// if - simple and first conditional statement
//in this if condition true then execute the if block statement otherwise not

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log("User Logged In")
// }


// < , > , <= ,>=, == ,=== ,!= , !== used in expression as condition

// === - strictly equal means it check the data type as well as value also if both value as well as data type are equal the it return true otherwise false

// if( 2 == "2"){
//     console.log("True")
// }

// if( 2 === "2"){
//     console.log("True")
// }

// if( 2 !== "2"){
//     console.log("True")
// }

// Note - !== -> this return true if the value same but data type not same


// if - else -> in this type statement ifn the condition  is true then if block statement executed otherwise else block statement executed
// const temp = 41;
// if(temp < 50){
//     console.log("Temprature less than 50.");
// }
// else{
//     console.log("Temprature greater than 50.")
// }


// const score = 200;

// if(score > 100){
//     let power = "Win";
//     console.log(`User Power : ${power}`)
// }

// console.log(`User Power : ${power}`)

const balance = 2400;

//shorthand notation
// if(balance > 500) console.log("test"), console.log("test2"),
// console.log("test3"); //this is not a good practice to write this type of code

// if else if -> statement used to check multiple condition

// if(balance > 500){
//     console.log("Greater tha 500");
// }
// else if(balance > 1000){
//     console.log("Greater than 1k.")
// }
// else if(balance > 1500) console.log("Greater than 1500");
// else console.log("Greater than 2k.")


const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("User allow to Shopping.")
}

const isGoogleAcc = true;
const isMicrosoftAcc = false;
if(isGoogleAcc || isMicrosoftAcc){
    console.log("Your are eligible for shoping with alternative option.")
}