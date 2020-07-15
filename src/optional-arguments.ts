export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if(printable){
    console.log({bmi});
  }
  return bmi;
};

bmi(1.72, 66, true);

// bmi(身長、体重、console.logでしゅつりょくするかどうか)
//bmi(1.72, 66, true);
//bmi(1.72, 66 false);
//bmi(1.72, 66);

//argumentsに?をつけるとあってもなくてもOKになる