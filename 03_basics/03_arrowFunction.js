const user = {
    username:"Rajneesh",
    email: "rajneesh@google.com",
    greet : function(){
        console.log(`${this.username} , Welcome.`)
        // console.log(this)
    }
} 

// user.greet()
// user.username = "Anshu"
// user.greet()

console.log(this)