// text reversing by for of looping
function reverseText(text) {
    let reverse='';
    for(const letter of text){
        console.log(letter);
        reverse=letter+reverse;
    }
    return reverse;
}
const text='Hey Bangladesh, I love You!';
const reversed=reverseText(text);