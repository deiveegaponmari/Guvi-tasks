const input=["i", "am", "an", "indian"];
const output=input.map((str) =>{
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + 
word.slice(1).toLowerCase();
    }).join(' ');


});
console.log(output);