class circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius() {
        return this.radius = 2.0;
    }
    getColor() {
        return this.color;
    }
    setColor() {
        return this.color = "orange";
    }
    getArea() {
        // return this.radius;
        const Area = Math.PI * this.radius * this.radius;
        return Area;
    }
    getCircumference(){
        const Circumference=2 * Math.PI * this.radius;
        return Circumference;
    }
}
//create instance
const mycircle = new circle();
//const getradius=circle.getRadius();
console.log(mycircle.getRadius());
console.log(mycircle.setRadius());
console.log(mycircle.getColor());
console.log(mycircle.setColor());
console.log(mycircle.getArea());
console.log(mycircle.getCircumference());

