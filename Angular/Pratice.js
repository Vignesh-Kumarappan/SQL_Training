/**let x: number = 12, y:number = 22, z:number=89;

if (y>x)
{
    if(z>y)
     console.log('greatest number is ' + z);
    else
     console.log('greatest number is ' + y);
}
else
{
    if(z>x)
     console.log('greatest number is ' + z);
    else
     console.log('greatest number is '+ x);

}*/
/**var values = [1, 2, 3, 4, 5];
var n= 3,check=0;
for(var i = 0; i < values.length; i++)
    if(values[i]==n)
      check +=1;
      
if(check === 1 )
   console.log('Value is found');
else
   console.log('Value is not found');
*/
/**
var arr = [10,20,30,40,50];
console.log('Reversed Array '+ arr.reverse());
*/
/**
class student{
    public stdID:number;
    public stdName: string;
    public stdClass: number;

    constructor(id:number, name:string,Class:number){
        this.stdID = id;
        this.stdName = name;
        this.stdClass = Class;
    }

    result(){
        return `std ID - ${this.stdID}, std Name - ${this.stdName}, std Class - ${this.stdClass} `
    }
}

let stud1 = new student(1,"Vicky",12);
let stud2 = new student(2,"Vignesh",11)

console.log(stud1.result());

*/
var product = /** @class */ (function () {
    function product(id, name, price) {
        this.proID = id;
        this.proName = name;
        this.proPrice = price;
    }
    product.prototype.gst = function () {
        return 0.18 * this.proPrice;
    };
    product.prototype.result = function () {
        return "Product ID - " + this.proID + ", Product Name - " + this.proName + ", Product Price - " + this.proPrice + ", GST - " + this.gst() + " ";
    };
    return product;
}());
var pro1 = new product(1, "pen", 100);
console.log(pro1.result());
