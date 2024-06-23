let data=[1,2,3,4,5];
const output=(function(input){
    for(i=0;i<input.length;i++){
        if(input[i]%2!==0){
          console.log(input[i]);
        }
    }

})(data)
console.log(output);