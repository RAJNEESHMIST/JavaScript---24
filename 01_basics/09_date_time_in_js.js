// dates 

// decalartion of date
let myDate = new Date();
// console.log(myDate);
console.log(myDate.toString());
// this give more readible output

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString())

// we can also create a specific date as well
// let createdDate = new Date(2024,6,15);
// we can also decalre date with more parameters as
// let createdDate = new Date(2024,6,15,5,10,7);

// we can also create a date of specific format as 
// let createdDate = new Date("2024-07-16");
let createdDate = new Date("6-7-2024");
console.log(createdDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createdDate.getTime());

// we can change the milli second into second 
// imp-interview question
console.log(Date.now()/1000); //- this give decimal value 

// to rmoving the decimal value we use floor function as
console.log(Math.floor(Date.now()/1000))



// some more function about date
let newDate = new Date();
console.log(newDate.getMonth() + 1); //month is starting from 0 that's why we do with sum 1ontPaletteValuesRule;
console.log(newDate.getDay()); // sun - 0 ,mon - 1,....
console.log(newDate.getFullYear());//this print the year like 2024


