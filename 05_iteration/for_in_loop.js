const myobject = {
    'user' : 'Mistv209898',
    'id': '23bcs80093',
    'clg': 'Chandigarh University'
}

// Note - forin loop is used to iterate the object 

//syntax
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myobject) {
    //   console.log(key); //this will print the keys of the object
    // console.log(`${key} :- `,myobject[key]);
    // console.log(`${key} :- ${myobject[key]}`);
}

//for_in loop also work on array but heck is that key return the value of index not value of key like fo_of loop
//let's see with an example

const prog = ['c++','js','java','python'];

for (const key in prog) {
    // console.log(key); //this print the index of the keys not value

    // console.log(prog[key]) //if we access of key then we can easily access the elements of the array
}

//note - we can also use for_in loop for array also

// const map = new Map(); //syntax to declare a map
// map.set("In" ,"India");
// map.set("Bh" ,"India");
// map.set("Eng" ,"England");
// map.set("Rus" ,"Russia"); 
// map.set("Aus" ,"Australia");
// map.set("I" ,89);
// map.set(2 ,"India");

// for (const key in map) {
//     console.log(key);
// }

//note - we cannot use for_in loop for map