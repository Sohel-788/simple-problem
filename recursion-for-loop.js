// recursion by for loop in a function
// simple for looping
// var sum =0;
// for (let i = 0; i < 7; i++) {
//      sum = sum+i;
// }
// console.log(sum);

// //decrementin
// var sum =0;
// for (let i = 7; i > 0; i--) {
//      sum = sum+i;
// }
// console.log(sum);
// sumation by recursion way
function sum(i) {
    if (i==1) {
        return 1;
    }
    return i+sum(i-1);
}
const result = sum(7);
console.log(result);

//factorial in recursive way. factorial means multiplication
function factorial(n){
    // console.log(n);
    if (n==1) {
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(6));

//fibonacci normal way by for looping
//[0,1,1,2,3,5,8,13,21] ধারা
// যেহেতু ফিবুনাচ্ছির n বা i তম ধারা আগের দুই তম পদের সমষ্টি, সেহেতু প্রাথমিক মান ধরতে হবে যে কোন দুটি পদ কে। তার পর লুপিং করার জন্য ২য় ইন্ডেক্স থেকে লুপিং শুরু করতে হবে কারন প্রাথমিক মান হিসেবে ত শুন্য এবং এক ইন্ডেক্স ধারা ই হয়েছে।
// let fibo=[0,1];
// for(let i=2; i<7; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);

//fibonacci recursive way element discovering
function fibo(n) {
    if(n==0){
        return 0;
    }
    if (n==1) {
        return 1;
    }
    return fibo(n-1)+fibo(n-2);
}
console.log(fibo(10));