const subject = ['java','c++','DAA','DSA','python','Coa']

// subject.forEach( function (s){
//     console.log(s);
// })

// subject.forEach((i) => {
//     console.log(i);
// })

//we can also define a function and pass that function as parameter in for each

function print(item){
    console.log(item);
}

// subject.forEach(print);//this also works 

subject.forEach((val,index, arr) => { //we can also access these things along with this using for  each loop
    // console.log(val,index,arr);
})


const coding = ['java','c++','DAA','DSA','python','Coa'];

// const values = coding.forEach((item) => { //lets checking is anything return by the forEach loop
//     console.log(item)
//     return item
// })

// console.log(values); //nothing return anything by this syntax
 
//note -> forEach() take argument of call back

