export {};

const nextYear = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
}

console.log(nextYear(1000));