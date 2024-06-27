class uberPrice{
    constructor(distance,amount,vehicle){
            this.distance=distance;
            this.amount=amount;
            this.vehicle=vehicle;
    }
   static getAmount(data){

        return data.map((value) =>{
            return  value.distance * value.amount ;
        })
    }
    
}
//create instance for class
//const price=new uberPrice();
const data=[
   new uberPrice(10,100,"Audi"),
   new uberPrice(10,200,"Bmw"),
   new uberPrice(10,400,"RolsRays"),
   new uberPrice(10,300,"Ferrari")
];
console.log(uberPrice.getAmount(data));