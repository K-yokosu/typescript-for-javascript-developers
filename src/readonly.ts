export {};

//readonly をつけるということは読めるのでpublicを削ることはできる。
//しかし、他の人のために省略しないほうがいいと思っている。

class VisaCard {
  constructor(public readonly owner: string){}
}

let myVisaCard = new VisaCard('ham');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';