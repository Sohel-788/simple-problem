//finding largest number of an array
function getLargest(numbers) {
    let largest=numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element>largest) {
            largest=element;
        }
    }
    return largest;
}
const number=[2,22,44,55,6,5,4,22,8,33];
const result=getLargest(number);
console.log(result,'is the largest number of this array');

//finding largest nagetive value of an array
const num=[-5,-3,-89,-33,-11];
const largestNum=getLargest(num);
console.log(largestNum,'is the largest nagetive value of the array');