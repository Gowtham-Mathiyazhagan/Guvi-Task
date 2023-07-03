//Day-6-Task

//1.Write a “person” class to hold all the details:
//Ans:
class details{
    constructor(n,age,g,q,a)
    {
        this.Name=n;
        this.Age=age;
        this.Gender=g;
        this.Qulification=q;
        this.Address=a
        
    }
    
}
let details1= new details("Gowtham",21,"Male","B.com","1/23 Middle Street,xyz.");
console.log(details1)

//2.write a class to calculate the uber price. in javascript:
//Ans:
class uber_price{
    constructor(d, t) {
      this.distance = d;
      this.time = t;
    }
  
    Price() {
      const charge = 50; 
      const distance_rate = 10; 
      const timeRate = 2; //   
      const distanceCost = this.distance * distance_rate;
      const timeCost = this.time * timeRate;
      const totalPrice = charge + distanceCost + timeCost;
  
      return totalPrice;
    }
  }
  const calculator = new uber_price(10, 30); 
  const price = calculator.Price();
  console.log("Price is:Rs."+price);
  

