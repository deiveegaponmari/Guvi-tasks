const input=[1,2,3,2,3,4,5,1,6,4];
const output=(function(data){
    return [...new Set(data)];

})(input);
console.log(output);