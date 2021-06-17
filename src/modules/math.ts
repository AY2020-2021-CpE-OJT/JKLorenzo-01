export function add(numbers: number[]): number {
  let sum = 0;
  for (const this_num of numbers) sum += this_num;
  return sum;
}
