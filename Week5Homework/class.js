//creating class keyword to declare a class

class Tshirts {
    constructor(name, price, color, size) {
        this.name = name;
        this.price = price; 
        this.color = color;
        this.size = size;
        this.bio = `${this.name} the ${price} there is a selection og ${color} and a ${size}`
    }
}
// this greet method to the Tshirts
greet() { 
    return `Hello you are now in the selection of the${this.name}`;
}

//this is in extends to the class

class Tshirts extends long sleeve {
    constructor(name, price, color, type) {
      // 
      super(name, price, color);
      this.type = type;
    }
    
    // this greet method "overwrites" Tshirts greet method

    greet() {
      return `Hello you are now in the selection of the${this.name}, and this is the${this.type}`;
    }
  }
  
