const price=21.32;
const ceilling=Math.ceil(price);//math.ceil fraction k 1 bariye pornango number dibe
console.log(ceilling);

const flooring=Math.floor(price);//Math.floor fraction er porer ta bad diye pornagngo number dibe
console.log(flooring);

// Math.random
const random =Math.random();
console.log(random);

//round
let randomNumber=Math.random();
randomNumber=(randomNumber)*100000;
const rounded=Math.round(randomNumber);
console.log(rounded);

var number=-33;
const absolute=Math.abs(number);
console.log(absolute);

//finding largest number from an array by for looping
let numbers=[1,2,5,8,6,456,44,66,88,10,20];
function largestNumber(numbers) {
    let max=numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element>max) {
            max=element;
        }
        
    }
    return max;
}
const maxNumber=largestNumber(numbers);
console.log(maxNumber);

//smallest number from an array by for looping
function smallestNumber(numbers) {
    let min=numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element<min) {
            min=element;
        }
    }
    return min;
}
let allNumbers=[1,2,5,8,6,456,44,66,88,10,20];
const minNumber=smallestNumber(allNumbers);
console.log(minNumber);