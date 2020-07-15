export {};

type Mojiretu = string;

const fooString: string = 'Hello';
const fooMojiretu: Mojiretu = 'Hello';

const example = {
  name: 'Kou',
  age: 25
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Kou',
  age: 25,
};

// exampleの型をエイリアスにする。型を追従することができるので便利
type Profile2 = typeof example;