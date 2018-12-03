import { readFileSync } from "fs";
const arrInput = readFileSync(`${__dirname}/input.txt`, "utf8");
import { sum } from "../utils/index";

const cleanInput = (input: string) => input.replace("\r", "");
const arrNumbers = arrInput
  .split("\n")
  .map(cleanInput)
  .map(parseFloat);

const main = (input: number[]): number => input.reduce(sum);

const result = main(arrNumbers);
console.log(result);

export default main;
