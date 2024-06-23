const arr=[1,2,3,4,5,6,7,8,9,10];
const isPrime=num =>{
    if(num<=1) return false;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%2==0) return false;
    }
    return true;
}
const primenum=arr.filter(isPrime);
console.log(primenum);