// variables can be decalared using three keywords that are and also without keyword also allowed
const accountId = 58656;
let accountEmail = "rajneesh@verma.com";
var accountPassword = "verma32";
accountCity ="Ayodhya";

let accountState;
// if we decalre a varible using the let or var key wihout assign a value the it is assigned to -> undefined

// accountId =78989; //it gives an error because no updation allowed in the variable decalred using const
console.log("Account_Id :",accountId);

accountEmail = "iamdevloper#.com";
accountPassword = "dffdws23";
accountCity = "Ambedkar Nagar";
// updation is allowed in the variables that is not decalred using the const keyword

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
