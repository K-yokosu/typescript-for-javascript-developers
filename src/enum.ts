export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
Months.February;

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
}

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
  YELLOW = '#FFFF00'
}
COLORS.YELLOW;