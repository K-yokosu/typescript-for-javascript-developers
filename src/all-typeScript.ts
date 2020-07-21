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
// function error(message: string): never{
//   throw new Error(message);
// }

// try{
//   let result = error("test");
//   console.log(result);
// } catch(error){
//   console.log(error);
// }

//null と undefined
let abc: null = null;
let def: undefined = undefined;

//object
let obj: object = {ob: 'kou'};
let obje: {oB: string} = {oB: 'kou'};

//alias
type Mojiretu = string;
const title: Mojiretu = 'title';

type Profile = {
  sei: string;
  sai: number;
}
const myProfile: Profile = {
  sei: 'yokota',
  sai: 24
}

//interface
interface objInterface{
  name: string;
  age: number;
}
let objj: objInterface = {
  name: 'kou',
  age: 24
}

//unknown
const kansu = (): number => 43;
let numberUnknown: unknown = kansu();
if(typeof numberUnknown === 'number'){
  console.log('unknown = number');
}

//intersection
type Pitcher = {
  speed: number;
}
type Batter = {
  swingSpeed: number;
}
type YobandeAce = Pitcher & Batter;
const kaibutu: YobandeAce = {
  speed: 150,
  swingSpeed: 140,
}
console.log({kaibutu});

//union
let value: string | number;
value = 1;
value = 'kou';

//Literal
let dayofTheWeek: '月' = '月';
let month: 1|2|3 = 1;
let True: true = true;

//enum
enum Months{
  January = 1,
  Febrary,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  Nobember,
  December,
}
console.log(Months.April);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
}

//function
//最後のnumber型は戻り地の型を指定する
function bmi(height: number, weight: number): number{
  return weight / (height * height);
}
console.log(bmi(1.72, 66));

let ave: (sum: number, wal: number) => number = (
  sum: number,
  wal: number
): number => {
  return sum / wal;
}

console.log(ave(100, 10));

//optinalパワメータ　あってもなくてもOKな引数のこと
//argumentsに?をつける
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number, 
  printable?: boolean
): number => {
  return weight / (height * height);
}
console.log(bmi2(1.73, 66));

//default paramater
let defaultParamater: (arg1: number, arg2?: number) => number = (
  arg1: number,
  arg2: number = 10
): number => {
  return arg1 * arg2;
}
console.log(defaultParamater(2));

//Rest paramater
//引数全てをうけとるパラメータ
const sum: (...value: number[]) => void = (
  ...value: number[]
) => {
  console.log(value);
}
sum(1,2,3,4,5);

//overload 同じ名前の関数でありながら引数の数や戻り値が違う関数のこと
//signatureを使う必要がある
//overload の関数ではsignatureで型制限しているので、any型でOK
function double(value: number): number;
function double(value: string): string;

function double(value: any): any{
  // return value * 2;
  if(typeof value === 'number'){
    return value * 2;
  }else{
    return value + value;
  }
}
console.log(double('ko'));

//class 
class Person{
  //constructorの前にメンバー変数を宣言すると共に型を指定する
  name: string;
  age: number;

  //引数にも型をアノテーションする
  //constructorには戻り値がないので型はいらない。voidですら書くとエラーになる
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  profile(): string{
    //テンプレートストリングを使っている
    return `name: ${this.name}, age: ${this.age}`
  }
}

let taro = new Person('ko', 24);
console.log(taro.profile());


//アクセス修飾子
//public は書いても書かなくても一緒なので書かないのが習慣
//private は直接メンバーにはアクセスできず、関数等での参照はできる。またここではHumanクラスのみでアクセスできる
//protected は子クラスでも参照できる
class Human {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality?: string;

  //引数にも型をアノテーションする
  //constructorには戻り値がないので型はいらない。voidですら書くとエラーになる
  constructor(name: string, age: number, nationality?: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    //テンプレートストリングを使っている
    return `name: ${this.name}, age: ${this.age}`
  }
}
class Android extends Human{
  constructor(name: string, age: number, nationality?: string){
    //親クラスのconstructorを呼べる。必要な引数を書いてやる
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let tar = new Android('ko', 24, 'Japan');
// console.log(tar.age);
console.log(tar.profile());