//Swap variable, swap without temp, destructing
var first=4;
var second=6;
console.log(first,second);
// var temp=first;
// first=second;
// second=temp;

//destructuring
[second,first]=[first,second];
console.log(first,second);