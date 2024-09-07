// function - function is used to pack the some lines of the code that can be used again and again by simply calling of the function.
// it increase the readability of the program also reduce the complexity

// syntax to decalre

function printStudentInformation(){ //-  {} - denote the scope of the function
    // function definition
    console.log("UID : 23BCS80093");
    console.log("Name : Rajneesh Verma");
    console.log("College : Chandigarh University");
}

// calling of the function
// printStudentInformation();
// console.log()
// printStudentInformation();

// printStudentInformation   //- this is the function reference means function kaha rheta hai
// printStudentInformation() // - this is the function execution

// parameterized function

function addTwoNumber(num1,num2){ //in js function noo need to give the data type of the parameter
    console.log(num1 + num2);
}
addTwoNumber(23,45)

//NOTE - but in this have an issue if we pass the argument of the other than number data type it throw undesired result

// for example
// addTwoNumber(23,"34") //2334
// addTwoNumber(21 ,"R") //21R ans so on

// Parameter - the name or varibale given during the decalaration of the function is called parameter for example - num1 and num2 are parameters of the function  addTwoNumber

// Argument - the actual value passed during the calling of the function  known as the argument
// for example - 3 , 4, a and so on are the arguments 


// function loginUser(username){
//     return `${username} just logged in.`
// }

function loginUser(username = "Rajneesh verma"){ // we can also give the default argument like this
    return `${username} just logged in.`
}
// const isLogin = loginUser(); //if we not pass any argument the by default it consider as undefined
const isLogin = loginUser("Rajneesh");

console.log(isLogin)

