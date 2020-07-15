export {};

class Me {
  static isProgrammer: boolean = true;
  static fisrtName: string = 'Kouki';
  static lastName: string = 'Yokota';

  static work(){
    // return "Hey, guys";
    return `Hey, guys! ${this.fisrtName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());