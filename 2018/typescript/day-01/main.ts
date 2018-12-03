import { readFileSync } from "fs";
const arrInput = readFileSync("./input.txt", "utf8");
import { sum } from "../utils/index";

const cleanInput = (input: string) => input.replace("\r", "");
const arrNumbers = arrInput
  .split("\n")
  .map(cleanInput)
  .map(parseFloat);

const main = (input): number => input.reduce(sum);

console.log(main(arrNumbers));
