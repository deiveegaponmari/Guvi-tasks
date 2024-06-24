/* const data=["radar","apple","level"];
const isPalindrome =data.map((dataval) =>{
    const reversed=dataval.slice('').reverse().join('');
    return dataval==reversed;
})
const output=data.filter(isPalindrome);
console.log(output); */

const data=["radar","apple","level"];
const output=((input) =>{
    function isPalindrome(str){
        //normal data
            const rawdata= str.toLowerCase().
            replace(/[^a-z0-9]/g, '');
            //reverse data
             const reversedata=rawdata.split('').reverse().join('');
            return rawdata===reversedata;
    }
    return input.filter(isPalindrome);
})(data);
console.log(output);