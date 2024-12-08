const user = {
    username:"Rajneesh",
    email: "rajneesh@google.com",
    greet : function(){
        console.log(`${this.username} , Welcome to JavaScript free course.`)
        console.log(this)
    }
} 

// user.greet()
// user.username = "Anshu"
// user.greet()

// console.log(this)

// function chai(){
//     let uname = "Rajneesh"
//     // console.log(this) //it will print many values that we will elaborate in dom 
//     console.log(this.uname);
// }

// chai();

// another way for funtion declaration
// const chai = function(){
//     let uname = "Rajneesh"
//         console.log(this) //it will print many values that we will elaborate in dom 
//         console.log(this.uname);
// }
// chai()

// Note - it will not work with function as like work with objects


// arrow function

const verma = () => {
    let username = "Rajneesh"
    console.log(this.username)
}
verma();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(45,98)) 

// const multi = (a,b) => a * b //this is the also valid synatax of arrow function

const multi = (a,b) => ({ user : "Rajneesh verma"}) //if we want to return an object the we use syntax like this 

console.log(multi(6,9))