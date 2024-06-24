class person{
    constructor(name,age,degree,gender){
        this.name=name;
        this.age=age;
        this.degree=degree;
        this.gender=gender;

    }
    getData(){
        return console.log(person1.degree);
    }
}

const person1=new person(
    "vani",
    28,
    "BE-CSE",
    "Female"
)
const person12=new person(
    "Rajan",
    29,
    "BBA",
    "Male"
)
person1.getData();