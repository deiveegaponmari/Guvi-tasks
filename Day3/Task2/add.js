const data=[5,10,15,20,25];
var output=((input) =>{
    //var data=[5,10,15,20,25];
    var sum=input.reduce(function(a,b){
        return a + b;
    },0);
    //console.log(sum);
    return sum;

})(data);
console.log(output);
/* const data=[5,10,15,20,25];
const output=data.reduce((a,b) =>{
    return a + b;
},0);
console.log(output); */