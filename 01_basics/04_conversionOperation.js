let score = "78";

// conversion operation ir helpful when data is fectched from the frontend and we have no idea about the data type of the data recieved

// console.log(typeof score);

let score1 = "784ab";
// we can convert to number data type of covertible other data type as 
let valInNummber = Number(score)
let valInNum1 = Number(score1)
// console.log(typeof valInNummber);

// console.log(typeof valInNum1);
// console.log(valInNum1) //if the string is not pure number then it is converted but stored value ass NAN -> not a integer
// console.log(typeof(score1));


let nullVar = null
let nullInNumber = Number(null)
// console.log(typeof nullVar) //object
// console.log(typeof nullInNumber) //number
// console.log(nullInNumber)  // -> null converted into number as 0

let undefinedVariable = undefined
let undefinedInNumber = Number(undefinedVariable);
// console.log(typeof undefinedInNumber) //number
// console.log(typeof undefinedVariable) // undefined
// console.log(undefinedInNumber) //undefined is converted to NAN in number

let num = NaN
let numInNumber = Number(num);
// console.log(typeof numInNumber)
// console.log(numInNumber)
// console.log(typeof num )


let isLoggedIn = true;
let  isLoggedInNumber = Number(isLoggedIn); // true - 1 and false - 0
// console.log(isLoggedInNumber)

//  true - converted to 1 and false -> 0 in Number conversion
// vice verse also true in case of Number to boolean conversion

// let activeAcc = "" //blank converted into false
let activeAcc = "Rajn" // converted into  true
let activeAccBool = Boolean(activeAcc);
// console.log(activeAccBool)


// number to string -> conversion
let stringNumber = 789;
let numberInString = String(stringNumber)
// console.log(numberInString)
// console.log( typeof numberInString)
// console.log(typeof stringNumber)


// +++++++++++++++++++++++ operations +++++++++++++++++++++++++++

let value = 78;
let negValue = -value;
// console.log(negValue);

let str1 = "Hello"
let str2 = " Chaudhary"
let str3 = str1 + str2
// console.log(str3) // this is called concateation of the string


// operators
// console.log(2+2); // 4 -> addition
// console.log(2-2);// 0 -> substraction
// console.log(2/2); //division -> 1
// console.log(2*2); //4 -> multiplictaion
// console.log(2**2); // -> 2^2 = 4 - power
// console.log(2%2);  //-> 0 - remainder

// console.log("1" + 2) //1st is string then rest all string
// console.log(1 + "2") //after 2nd all treated as string
// console.log("1" + 2 +2) //like first rule
// console.log(1 + 2 + "2") //1, 2 is treated as number rest as string

