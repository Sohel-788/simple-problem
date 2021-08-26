//break keyword means spot or if conditon is true the iteration will break
var number=0;
// while (number<10) {
//     console.log(number);
//     if (number==5) {
//         console.log("The iteration will be break down here")
//         break;
//     }
//     number++;
   
// }
//break keyword practice by for loop keyword
// for (let number = 0; number<=20; number++) {
//     console.log(number)
//     if (number>9) {
//         console.log("The iteration will be break down here")
//         break;
//     }
// }
// break in array element
// const num=[11,22,33,55,66,88,77,99,100,201,101];
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
//     if (element==77) {
//         console.log('The code axcution will be stoped here');
//         break;
//     }
    
// }

// continue keyword practice 
const numbers=[11,22,33,44,55,66,77,88,98,100,10,102,103];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element>55) {
        continue;
    }
    console.log(element);
}