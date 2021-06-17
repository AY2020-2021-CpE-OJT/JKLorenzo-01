import { add } from "./modules/math.js";

function main() {
  const numbers_to_add = [1, 7, 15];

  const sum = add(numbers_to_add);

  const formatted_nums_to_add = numbers_to_add
    .map((num, index) => {
      if (numbers_to_add.length === index + 1) {
        return `and ${num}`;
      }
      return `${num},`;
    })
    .join(" ");

  console.log(`The sum of ${formatted_nums_to_add} is ${sum}.`);
}

main();
