//removing duplicate element from an array
const names=['anika','sanik','manika','lanika','danika','jalika','salika','chalika','anika','sanik','manika','lanika','danika','jalika','salika','chalika'];
function removeDuplicate(names) {
    let unique=[];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }
    for(const element of names){
        if (unique.indexOf(element)==-1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueName=removeDuplicate(names);
console.log('the unique element is',uniqueName);

//unique number or removing duplicate element from an array
function removeDuplicateNumber(numbers) {
    let uniqueNumbers=[];
    for(element of numbers){
        if (uniqueNumbers.indexOf(element)==-1) {
            uniqueNumbers.push(element);
        }
    }
    return uniqueNumbers;
}
const numbers=[1,1,2,2,3,3,4,4,5,5,8,8,9,9,10,1,010,10];
const uniqueNumber=removeDuplicateNumber(numbers);
console.log(uniqueNumber);