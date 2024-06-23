/*  const data=[1,2,3,4,5];
 const oddnumbers=data.filter(num => num%2!==0);
 console.log(oddnumbers); */

 let data=[1,2,3,4,5];
 const output=((input) => {
     for(i=0;i<input.length;i++){
         if(input[i]%2!==0){
           console.log(input[i]);
         }
     }
 
 })(data)
//console.log(output);