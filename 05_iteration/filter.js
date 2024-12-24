const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter( (num) => num > 5);// when we use paranthesis then we not need to return explicitly
const newNums = myNums.filter( (num) => {
    // num > 5 //if we do not return eplicitly then it does not return anything
    return num > 5;
});

// console.log(newNums); 

//Note -> filter and forEach both take call back to work but filter return the values where as the forEach does not return any values

// //this can also achieved by making function explicitly as
// function call(num){
//     return num > 5;
// }
// const filterNum = myNums.filter(call(num));    ///think about this why it is not working
// console.log(filterNum);

// we can also do the same thing using the forEach loop

let Num = [];
myNums.forEach((num) => {
    if(num > 5){
        Num.push(num);
    }
})

// console.log(Num); //same thingh we achieve as done by using the filter

const books = [
    {tile : 'Book one',genre : 'Science',publish : 2000,edition : 2004},
    {tile : 'Book two',genre : 'History',publish : 2005,edition : 2004},
    {tile : 'Book three',genre : 'Geo',publish : 2006,edition : 2004},
    {tile : 'Book four',genre : 'History',publish : 2007,edition : 2008},
    {tile : 'Book five',genre : 'Science',publish : 2008,edition : 2004},
    {tile : 'Book six',genre : 'English',publish : 2004,edition : 2010},
    {tile : 'Book seven',genre : 'History',publish : 2003,edition : 2009},
    {tile : 'Book eight',genre : 'History',publish : 2000,edition : 2004},
]

// const myBooks = books.filter((bk) => bk.edition >2004);
const myBooks = books.filter((bk) =>{
      return (bk.edition >2004 && bk.genre === 'History');
});
console.log(myBooks)