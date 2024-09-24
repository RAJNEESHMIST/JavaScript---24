// in this program we discuss about the scope of the program 

// const num = 67
// let n = 56
// var m = 68


if(true){
    const num = 67
    let n = 56
    var m = 68

    num2 = 78;

}

// console.log(num)
// console.log(n)

// Note - const and let variables are scope variable
// console.log(m)
// console.log(num2)
//Note - var and without keyword variable can be accessible everywhere in the program

// something more about the function scope


function one(){ //parent function 
    const username = "Mistv399"; // parent function variable

    function two(){ // child function
        const fav = "Data Structure"; // child function variable
        console.log(username) //accessing the parent function variable in child function
        }
        // console.log(fav); //try to access child function variable inside the parent function

        two()
}

one()