const data=["radar","apple","level"];
const isPalindrome =data.map((dataval) =>{
    const reversed=dataval.slice('').reverse().join('');
    return dataval==reversed;
})
const output=data.filter(isPalindrome);
console.log(output);