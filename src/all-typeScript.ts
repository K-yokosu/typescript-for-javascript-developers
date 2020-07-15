export {};

let isFinished: boolean = true;
let nameString: string = 'kou';
let ageNumber: number = 24;

//配列
let numbers: number[] = [1, 2, 3];
let numberss: Array<number> = [1, 2, 3];
let nijegenArray: number[][] = [
  [50, 100],
  [200, 250],
];
let hairetu: (string | number | boolean)[] = ['kou', true, 3];

//tuple型 tupleは配列の順番も型で縛る型
let tuple: [string, number] = ['kou', 24];

//void型　リターンされる値がないが、呼び元に戻ってくる関数につける
function returnNothing(): void{
  console.log('not return');
}

//never 呼び元にもどってこない関数（例外発生に使用）
function error(message: string): never{
  throw new Error(message);
}

try{
  let result = error("test");
  console.log(result);
} catch(error){
  console.log(error);
}

//null と undefined
let abc: null = null;
let def: undefined = undefined;