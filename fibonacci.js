//fibonacci series|ধারা
// 0 1 1 2 3 5 8 13 21 34 55
/*
3rd=2nd+1st
4th=3rd+2nd
5th=4th+3rd
6th=5th+4th
7th=6th+5th
100th=99th+98th
nth=(n-1)th+(n-2)th
ith=(i-1)th+(i-2)th
*/
// fibonacci series discoverin process by for loop from a array
// 2nd index theke soro korte hobe jeheto first element er ager number amra jani na
const fibo=[0,1];
for (let i = 2;i<=10; i++) {
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log('Ith series',fibo)

const fiboSeries=[22,33];
for (let n = 2;n<=10; n++) {
    fiboSeries[n]=fiboSeries[n-1]+fiboSeries[n-2];
}
console.log('Nth series',fiboSeries);

// creating fibonacci series by for loop in function
function fibonacci(num) {
    let fibo=[34,55];
    for (let i = 2; i<=num; i++) {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
var fiboNacci=fibonacci(15);
console.log('Fibonnacci',fiboNacci);

//problem solving
function fiboN(num) {
    if (typeof num != 'number') {
        return 'Please input a valid number';
    }else if(num<2){
        return 'Please input a positive number';
    }

        let fibo=[34,55];
        for (let i = 2; i<=num; i++) {
            fibo[i]=fibo[i-1]+fibo[i-2];
        }
    return fibo;
}
var fiboS=fiboN(-25);
console.log(fiboS);

//fibonacci element creating. nth element .recursive way-stopping condition
function nthElement(n) {
    if (n==0) {
        return 0;
    }
    if (n==1) {
        return 1;
    }
    return nthElement(n-1)+nthElement(n-2);
}
const element=nthElement(19)//9th element
console.log('19th element',element);

//fibonacci series creating in an array, recursive way that means stopping conditionaly
function fibonacciSeries(n) {
    if (n==0) {
        return [0];
    }
    if (n==1) {
        return [0,1];
    }
    const fiboSeries=fibonacciSeries(n-1);
    fiboSeries[n]=fiboSeries[n-1]+fiboSeries[n-2];
    return fiboSeries;
}
const fiboElenentArray=fibonacciSeries(11);
console.log('Fibo array',fiboElenentArray);