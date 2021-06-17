import { add } from "./modules/math.js";

function main() {
  const num1 = 1;
  const num2 = 7;
  const num3 = 15;
  const sum = add([num1, num2, num3]);
  console.log(`The sum of ${num1}, ${num2}, and ${num3} is ${sum}.`);
}

main();
