const myNum = [1,2,3];
// const total = myNum.reduce(function(acc,curval) {
//     console.log(`acc : ${acc}  curr : ${curval}`);
//     return acc + curval;
// },20);

// initially the value of the acc is equal to the initial value and currval is equal to the 

// const total = myNum.reduce((acc,curval) => {
//     console.log(`curr : ${curval} acc : ${acc}`);
//     return acc + curval;
// },10)

//if we open scope then we have to return explicitly

// const total = myNum.reduce( (acc,cuval) => (acc + cuval),0) // if we not open the scope then we do not have to return explicitly

// console.log(total);

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Py Course",
        price : 999
    },
    {
        itemName : "DSA Course",
        price : 5999
    }
]

const totalPayment = shoppingCart.reduce( (acc,item) => acc + item.price   , 0)
console.log(`Total payment : ${totalPayment}`)