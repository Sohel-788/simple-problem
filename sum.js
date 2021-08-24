// Sumation
let sum = 0;
const numbers = [454, 44, 8, 7, 66, 784, 5, 9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum, 'is the sumation of array');

function getSum(numbers) {
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum=sum + element;
    }
    return sum;
}
const total = getSum([44,77,54,88]);
console.log(total,'is the sumation of array function');