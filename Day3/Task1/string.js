const input=["i", "am", "an", "indian"];
const output=(function(data){
    return data.map(function(str) {
        return str.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + 
word.slice(1).toLowerCase();
        }).join(' ');
    });

})(input)
console.log(output);
    