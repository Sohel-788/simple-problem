// cheapest phone from an array
const phones=[
    {name:'Samsung',price:100000, storage:'32gb'},
    {name:'Nokia',price:11000, storage:'16gb'},
    {name:'Iphone',price:120000, storage:'128gb'},
    {name:'Samsung',price:30000, storage:'64gb'},
    {name:'Samsung',price:20000, storage:'32gb'}
];
let cheapest=phones[0];
for(const phone of phones){
    if (phone.price<cheapest.price) {
        cheapest=phone;
    }
}
console.log(cheapest);

// via function
function getCheapestPhone(phones) {
    var cheapest=phones[0];
    for(const item of phones){
        if (item.price<cheapest.price){
            cheapest=item;
        }
    }
    return cheapest;
}
const cheapestPhone = getCheapestPhone(phones);
console.log('The cheapest phone is',cheapestPhone);

// expensive phone from an array
function expensivePhone(phones) {
    let expensive=phones[0];
    for(const phone of phones){
        if (phone.price>expensive.price) {
            expensive=phone;
        }
    }
    return expensive;
}
const expensived=expensivePhone(phones);
console.log('This phone is so expensive',expensived);