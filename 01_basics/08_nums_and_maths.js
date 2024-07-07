// ##################### NUMBER #################
const score = 900;
console.log(score);

// after initializing the value of score it confirms that it is the Number data type

const balance = new Number(5000);
console.log(balance);

// const newBal = balance.toString();//convert a number into string
// console.log(newBal); 
// console.log(newBal.length); //now we can use the string function as well because of the number is converted into string now
// console.log(typeof newBal);

const preciseBalance = balance.toFixed(2);
console.log(preciseBalance);

const anotherNumber = 12.35685;
// const precNumber = anotherNumber.toPrecision(3);
// const precNumber = anotherNumber.toPrecision(4);
const precNumber = anotherNumber.toPrecision(3);
// console.log(precNumber);
// console.log(typeof precNumber);

//NOTE - toPrecision() -> give a string value 

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(typeof hundreds.toLocaleString());

// toLocaleString() - fun to conver the number into string with comma seperated that helps to see the number of the 0s in the big number


// ***************Maths*************
console.log(Math);
// Math - is object which provide many predefined values like (PI and so on..) and many function as well like abs() for absolute value and so many

//1.Math.abs(var) - to obtain the absolute value of the variable var
// console.log(Math.abs(-23));

// 2.round(number) - we find the round off of the given floating point number
// console.log(Math.round(4.09))

// 3.Mth.ceil() - return the upper bound of the function
// console.log(Math.ceil(4.1))
// console.log(Math.ceil(4.0000000000000000000001))

// 4.Math.floor - return the lower bound of the number
// console.log(Math.floor(1.2))
// console.log(Math.floor(1.9999999999999999999999999999992))

// 5.Math.min(array) - return the min value of the range of the value
console.log(Math.min(12,34,5,2,6,7));

// 6.Math.max(array) - return the max value in the range of the values
console.log(Math.max(12,34,5,2,6,7));

// 7.Math.random() - it return the random value from 0 to 1
console.log(Math.random()) //each case it will return random number
console.log(Math.ceil(Math.random()*10)) //each case it will return random number
console.log(Math.floor(Math.random()*10)) //each case it will return random number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1))+min)






