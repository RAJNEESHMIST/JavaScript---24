// let's we do some more deep into array

num1 = [45,23,56,12,87,89];
names = ["Rajneesh","Verma","Patel"]

// Note - now if we diretly push the arrau into another array the new array created as 2d array instead of merge these two array 

// console.log(num1);
// console.log(names);

// names.push(num1);
// console.log(names);

// now for accessing the array inside array value we ned like this opertor

// console.log(names[3][0]);
// console.log(names[3][1]);

// concatenate() - this function return a new array after concatenating properly like this
// const newArr = num1.concat(names);
// console.log("A ",num1)
// console.log("B ",names)
// console.log("newArr ",newArr)

// now we see the output is well merged but mostly it is also not used 

// we  also use spread operator to merge two array
const newArr1 = [...num1,...names];
// ... - this is the spread operrator which spread all the element of the array as individual element
//  console.log("A ",num1)
// console.log("B ",names)
// console.log("newArr ",newArr1)


const another_arr = [12,23,56,[78,89,[544,546,356]],89,87,5]
// to resolving these type of the situation we use the flat function

// const another_usable_arr = another_arr.flat(Infinity)
// console.log(another_arr)
// console.log(another_usable_arr)

console.log(Array.isArray("Rajneesh"))
// it return the boolean value whether the passed value is array or not

console.log(Array.from("Rajneesh"));
// this convert the passed argument into array if not able to convert then return a empty object

let var1 =79;
let var2 =34;
let var3 = 13
console.log(Array.of(var1,var2,var3));



