
// Question 1

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


// Question 2

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


// Question 3

/** 
var arr = [10,20,30,40,50];
console.log('Reversed Array '+ arr.reverse());
*/


// Question 4

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


// Question 5

/** 
class product{
    public proID:number;
    public proName: string;
    public proPrice: number;

    constructor(id:number, name:string,price:number){
        this.proID = id;
        this.proName = name;
        this.proPrice = price;
    }
    gst(){
        return 0.18*this.proPrice;
    }

    result(){
        return `Product ID - ${this.proID}, Product Name - ${this.proName}, Product Price - ${this.proPrice}, GST - ${this.gst()} `
    }
}

let pro1 = new product(1,"pen",100);

console.log(pro1.result());

*/

// Question 6

/** 
class tshirt{
    color:string;
    material:string;
    design:string;
    size:string;
    constructor(color:string,material:string,design:string,size:string){
          this.color=color;
          this.material=material;
          this.design=design;
          this.size=size;
    }
  
    result(){
        return `Color - ${this.color}, Material - ${this.material}, Design - ${this.design}, Size - ${this.size} `
    }
        
  }
  
  var tshirt1=new tshirt('blue','cotton','fchecked','small');
  var tshirt2=new tshirt('green','fabric','plain','large');
  var tshirt3=new tshirt('red','cotton','flower pattern','xtra-large');

  console.log(tshirt1.result());
  console.log(tshirt2.result());
  console.log(tshirt3.result());

  */

  // Question 7

  /** 

  export class Car{
	speed:number;
	regularPrice:number;
	color:string;
	constructor(speed:number,price:number,color:string){
		this.speed=speed;
		this.regularPrice=price;
		this.color=color;
	}
	getSalePrice():number{
        	return 0; 
	}
	results(){
        return `speed - ${this.speed}, color - ${this.color}, price - ${this.regularPrice} `
		console.log("initial speed:"+this.speed);
		console.log("color:"+this.color);
		console.log("initial price:"+this.regularPrice);
	}
}

export class Truck extends Car{
	 weight:number;
	 price:number;
	 totalPrice:number;
	constructor(speed:number,price:number,color:string,weight:number){
		super(speed,price,color);
		this.weight=weight;
		this.price=price;
	}

	getSalePrice():number{
		if(this.weight>2000){
			this.totalPrice=this.price-((this.price*10)/100);
		}
		else{
			this.totalPrice=this.price-((this.price*20)/100);					
		}
	  return this.totalPrice;
	}

 result():void{
	super.results();
	console.log("Weight:"+this.weight);
	console.log("Sale Price:"+this.getSalePrice());
 }
		
}

var truck=new Truck(100,10000,'black',1000);
truck.result();

*/