// array

// creation of an array
// const myArray = [1,2,7,4,true,23.34];
//  NOTE - we can put any type of data in the single 

const arr = ["Rajneesh ","Anshu","saini","verma"];

// another decalaration
const arr2 = new Array(45,56,23,52);
// console.log(arr2[3]);
// console.log(arr2[10]);

// array methods
// 1.push(ele)   - this method helps us to insert new element in the array
// 2.pop() - remove the element from the array 

// Note: push() and pop() work from the end of the array

// arr2.push(65);
// arr2.push(98);
// console.log(arr2);

// 3. unshift(val) - insert the value at the begining of the array
// 4. shift() - delete element from begining of the array
// arr2.unshift(98)
// arr2.unshift(68)


// arr2.shift()
// arr2.shift()

// console.log(arr2)

// Note - shift() and unshit() also used to add delete and insert the element in an array but from the begining that increses the time complexity

// 5. includes(val) - return true if the val is present in the target array
// console.log(arr2.includes(45));
// console.log(arr2.includes(455));

// 6. indexOf(val) - it return the index of the particular value
// console.log(arr2.indexOf(66));
// console.log(arr2.indexOf(52));

// 7.join() - convert the array into string
// console.log(arr2);
// console.log(typeof arr2);

// const convertToStringArr = arr2.join();
// console.log(convertToStringArr)
// console.log(typeof convertToStringArr);

// 8.slice(startIndex,endIndex) - this return the part of the array from the orginal array without aftecting the orginal array 

const num = [45,56,89,7,54];

console.log(" A ",num)

console.log(num.slice(0,3));
console.log(" B ",num)


// 9.splice(star,end) - it return the part of the array end index inclusive and also affect the orginal array

console.log(num.splice(0,3))
console.log(" C ",num)