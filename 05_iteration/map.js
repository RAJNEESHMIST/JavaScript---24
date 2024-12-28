const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNumber.map((num)=> (num + 10)); 
// const newNum = myNumber.map((num)=> {return(num + 10)}); //if we open scope then we have to return explicitly like filter


// chaining - means applying more than one method simultaneously 
// for example
const newNums =  myNumber
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 50)

console.log(newNums);

// this is all about maping and chaining