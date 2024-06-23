const arr=[1,2,3,4,5,6,7,8,9,10];
const output=(function(input){
function isPrime(num){ //function to check if a number is prime
    if(num<=1) return false;//its not prime
    if(num===2) return true;//2 is a only even prime number
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true;
    }
    return arr.filter(isPrime);
})(arr);
console.log(output);