const input=[1,2,3,4,5,6];
const k=3;
const output=(function(data,k){
    const n=data.length;
    k=k%n;
    return data.slice(-k).concat(data.slice(0,-k));

})(input,k);
console.log(output);