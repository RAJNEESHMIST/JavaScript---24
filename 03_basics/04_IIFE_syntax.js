//Immedietly Invoked Function Execution (IIFE) - this is the syntax used to remove the global pollution of the code and also execute the function immedietly

(function name() {

    //named IIFF
    console.log('Rajneeh verms');
})();

//note - semicolon is important after the IIFE statement it is beacuse we have to tell the scope of IIFE execution

(()=>{
    //unnamed IFEE
    console.log('IIFE working for all type of Function declaration.');
})(); //putting semicolon is good practice for IIFE syntax


((user)=>{
    console.log(`IIFE working for all type of Function declaration. ${user}`);
})('Rajneesh Verma');  //we can also use it for the parametrized function
// name()// this is the pollution of the code

// Note - how we write two IFFE in same file - ans putting semicolon after one IFFE