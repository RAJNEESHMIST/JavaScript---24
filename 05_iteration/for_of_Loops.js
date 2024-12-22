//some advance loop used in modern programming
// 1. for of
// syantax
// for (const element of object) {
    
// }

//[" "," "," "] - array of string
//[{}, {},{}] - array of object -> first iterate array then we access element of object using dot(.) notation or square [] notation

// let arr = [12,34,23,56,77,88];
// for (const element of arr) {
//     console.log(`The element of array ${element}`);
      
// }

// const str = "Rajneesh"

// for (const element of str) {
//     console.log(`char of string ${element}`);
// }

//maps -> store the value in the form of key value pairs

const map = new Map(); //syntax to declare a map
map.set("In" ,"India");
map.set("Bh" ,"India");
map.set("Eng" ,"England");
map.set("Rus" ,"Russia");
map.set("Aus" ,"Australia");
map.set("I" ,89);
map.set(2 ,"India");

//note - it also maintain the order 
//keys only be unique 
// console.log(map);

// for (const keyOfMap of map) {
//     console.log(keyOfMap); // this syntax print the map in the form of key value pair like as -
// // [ 'In', 'India' ]
// // [ 'Bh', 'India' ]
// }

for (const [key,val] of map) {
    //console.log(`${key} :- ${val}`); //in this values are print only key value like this-
    // In :- India
    // Bh :- India
}

//but forof loop is not applicable on object let's understand with example
let myobject = {
    'Name':'Rajneesh Verma',
    'Uid':'23bcs80093'
}

// for (const [key,value] of myobject) {
//     //console.log(`${key} :- ${val}`); // this shows error as the object is not iteratable
// }

//Note - forof loop not applicable on objects
