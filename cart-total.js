const cart=[
    {name:'laptop',price:20000,quantity:1},
    {name:'phone',price:10000,quantity:2},
    {name:'watch',price:3000,quantity:5},
    {name:'bike',price:100000,quantity:3}
];
let cartTotal=0;
for(const product of cart){
    // console.log(product);
    const productTotal=product.price * product.quantity;
    cartTotal=cartTotal+productTotal;
}
console.log(cartTotal);

// let sum=0;
// for(let i=0;i<=3;i++){
//     sum=sum+i;
// }
// console.log(sum)