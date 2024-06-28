class uberPrice{
    constructor(distance,costPerKilometre,vehicle){
            this.distance=distance;
            this.costPerKilometre=costPerKilometre;
            this.vehicle=vehicle;
    }
   static getAmount(data){

        return data.map((value) =>{
            return  value.distance * value.costPerKilometre ;
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
const TotalCost=uberPrice.getAmount(data);
console.log(TotalCost);