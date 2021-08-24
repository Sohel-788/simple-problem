var business=44444;
var minister =4541;
var sochib =5547;
if (business>minister && business>sochib){
    console.log("Busingess man is bigger than other")
}else if (minister>sochib && misister>business){
    console.log('Minister is bigger than other.')
}
else{
    console.log('Sochib is bigger than other')
}
//findig biggest number
function findBiggest(num1,num2,num3){
    if (num1>num2 && num1>num3){
        return num1;
    } else if (num2>num3 && num2>num3){
        return num2;
    }else{
        return num3;
    }
}
const max = findBiggest(654,45543,7879);
console.log('Biggest number is',max);

//findig smallest number
function findSmallest(num1,num2,num3){
    if (num1<num2 && num1<num3){
        return num1;
    } else if (num2<num3 && num2<num3){
        return num2;
    }else{
        return num3;
    }
}
const min = findSmallest(654,45543,7879);
console.log('Smallest number is',min)