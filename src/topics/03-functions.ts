// Functions in JS always return undefined by default
// Traditional functions
function addNumbers(a: number, b: number) {
  return a + b;
}

// Arrow functions
const addNumbersArrow = (a: number, b: number): number => {
  return a + b;
};

const result = addNumbers(33, 2);
const resultArr = addNumbersArrow(3, 4);

console.log({ result }, { resultArr });
