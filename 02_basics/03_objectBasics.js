// we learn about objects
 
// singleton
// object.create


// literals
const jsUser ={ 
    name : "Rajneesh",
    age : 22,
    "loc 1" : "Punjab",
    isLogged : false,
    lastLogin : ["Monday","Tuesday","Friday"]
}

// accessing the values of the object

// 1. using dot(.) operator
// console.log(jsUser.name)
// console.log(jsUser.loc 1) - we cannot access the value of these type of key by dot operator so we need another way to access

// 2. using the brackets
// console.log(jsUser["name"])
// console.log(jsUser["loc 1"])

// Note - so we need to know about both type of the accessing method

// symbol
const mySym = Symbol("Key1");

// Syntax to use symbol as a key of the object - important interview question

const emp = {
    userName : "MistV299",
    [mySym] : "My key 1"
}

// console.log(emp[mySym]) // - accessing like this

// console.log(jsUser)
// jsUser.isLogged = true
// console.log(jsUser)

// Object.freeze(jsUser)
// jsUser.isLogged = false

// console.log(emp)


// Note - we can add more key value using the .(dot) operator
// here we passing the function as the value 
emp.greeting = function(){
    console.log("Good Morning Employee");
}

// console.log(emp.greeting)
console.log(emp.greeting())

emp.greetingTwo = function(){
    console.log(`Hello ${this.userName}`)
}

console.log(emp.greetingTwo())


