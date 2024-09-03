// objects are declared as singleton object and non singleton object for example:-

// const tinderUser = new Object() // - singleton object

const tinderUser = {} //- non singleton object
tinderUser.id = "MistV299"
tinderUser.name = "Rajneesh verma"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "rajneesh@google.com",
    username : {
        userFullName : {
            firstName : "Rajneesh",
            lastName : "Verma"
        }
    }
}

// Accessing of the elements of the nested object
// NOTE - we can access like this using the multiple level of  accessing
// console.log(regularUser)
// console.log(regularUser.username)
// console.log(regularUser.username.userFullName)
// console.log(regularUser.username.userFullName.firstName)
// console.log(regularUser.username.userFullName.lastName)


const ob1 = {
    1 : "A",
    2 : "B"
}

const ob2 = {
    3 : "D",
    4 : "E"
}

// const mergedObject = {ob1,ob2}  // in this new object is object within the object not merrged

// const mergedObject = Object.assign({},ob1,ob2)

// NOTE - in this type of merging the first parameter is the empty is consider as the source and remaining all merged and assigned to the empty object
// console.log(mergedObject)
const ob3 = {...ob1,...ob2}

// console.log(ob3)

// when data come from the database then the array of objects come 

const user = [
    {
        username : "mist299",
        pass : "Anshu78"
    },
    {
        username : "vfge34",
        pass : "sdsded"
    }
]

console.log(user[1].username)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
