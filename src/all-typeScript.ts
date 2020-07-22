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
  //constructorの前にメンバー変数を宣言すると共に型を指定する(メンバー変数の初期化)
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


//初期化処理の自動化
//この使い方でのpublicは省略できない
class Peason{
  constructor(public name: string, protected age: number){}
}
const me = new Peason('kou',24);
console.log(me);


//getter setter アクセサー
//get 参照
//set 値を設定する時

//要件
// * owner
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない
//  * 参照できる。
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる
//  * 参照できない。
class MyNumberCard{
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(){
    return this._owner;
  }
  set secretNumber(secretNumber: number){
    this._secretNumber = secretNumber;
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('こう', 123455);
// card.owner = 'Ham';
console.log(card.owner);
// card.secretNumber;
// card._secretNumber
console.log(card.debugPrint());
card.secretNumber = 111111;
console.log(card.debugPrint());


//readonly 読み取り専用のプロパティ
// class VisaCard{
//   readonly owner: string;

//   constructor(owner: string){
//     this.owner = owner;
//   }
// }

//簡略系
//readonly をつけるということは読めるのでpublicを削ることはできる。
//しかし、他の人のために省略しないほうがいいと思っている。
class VisaCard{
  constructor(public readonly owner: string){}
}
let myVisaCard = new VisaCard('kou');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ham';


//静的メンバ
//いつも変化しないメンバを作りたい時に使う
//new 演算子でインスタンスを作る必要がない
class Me{
  static isProgrammer: boolean = true;
  static firstName: string = 'Kou';
  static lastName: string = 'Yokota';

  static work(){
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript?`;
  }
}

// let you = new Me();
// console.log(you.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());


//namespace 名前空間
//同じ名前空間には同じクラス名は使えない
namespace Japanese{
  //外からアクセスできるようにするにはexport が必要
  export namespace Tokyo{
    export class Pet {
      constructor(public name: string) { }
    }
  }
}

namespace English{
  export class Pet {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) { }
  }
}


const i = new Japanese.Tokyo.Pet('バジル');
console.log(i.name);

const michael = new English.Pet('Michael', 'Joseph', 'Jackson');
console.log(michael);


//継承
class Animal {
  constructor(public name: string) { }
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    //nameは親、speedは子クラスで初期化していることを自明にしている
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());


//抽象メソッド
//必ずoverrideする必要がある
//signatureの宣言
//実装忘れの防止になる
abstract class Kemono{
  abstract cry(): string;
}

class Rabbit extends Kemono{
  cry(){
    return 'ku';
  }
}
// class Tiger extends Kemono{}


//interface
//TypeScriptは単一継承なので複数のクラスを継承できないが、複数のinterfaceは実装できる
//実装忘れの防止になる
class Mahotsukai { }
class Souryo { }

class Taro extends Mahotsukai { }

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();


// 型の互換性
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let foo: string;
let bar: number = 1;

// foo = bar;

// let fooString: string;
// let barString: string = 'string';
// fooString = barString;

// let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
// fooString = fooStringLiteral;

// let fooNumber: number;
// let fooNumberLiteral: 1976 = 1976;
// fooNumber = fooNumberLiteral;

// interface Animal {
//   age: number;
//   name: string;
// }

// class Person {
//   constructor(public age: number, public name: string) { }
// }

// let me: Animal;
// me = new Person(43, 'kou');


//ジェネリクス
//汎用性
//型違いの関数を統合できる
// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };
const echo = <T>(arg: T): T => {
  return arg;
};
console.log(echo<number>(100));
console.log(echo<string>('Hello'));

class Mirror<T>{
  constructor(public value: T){}

  echo(): T{
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello').echo());


//型アサーション
//左辺ではなく右辺で型を指定するほうが、より早く型を教えれるので健全らしい
let name: any = 'ham';
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;  //このアサーション方法はJSXと似ているので推奨されていない

// length = 'foo';


//constアサーション
let namu = 'kou';
namu = 'Ham';

let nickname = 'Ham' as const; //Hamしか代入できなくなるので実質定数
// nickname = 'Hamtaro';

let pro = {
  name: 'kou',
  height: 172
} as const; //as const 一つで全てのプロパティにreadonlyがつくので便利
// pro.name = 'Yoko';
// pro.height = 180;


//Nullable型
//tsconfig.json のstrictNullChecksが trueなら nullは許容されない
//仮にfalseにした場合、どんなものにもnullが許容される。nullableな状態。
//データの秩序がなくなるので通常はtrueのままにしておく。
//union型を使うことで実現させる。
let prof: { name: string, age: number | null} = {
  name: 'Ham',
  age: null
}


//indexsignature
//プロパティはあらかじめ型アノテーションしておく必要がある。
interface Profi{
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profi: Profi = {underTwenty: false};
//How to write index signatures
// { [ index: typeForIndex]: typeForValue }
profi.name = 'Ham';
profi.age = 43;
