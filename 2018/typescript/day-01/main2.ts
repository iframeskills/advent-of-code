import { readFileSync } from "fs";
const arrInput = readFileSync(`${__dirname}/input.txt`, "utf8");

const cleanInput = (input: string) => input.replace("\r", "");
const arrNumbers = arrInput
  .split("\n")
  .map(cleanInput)
  .map(parseFloat);

const main = (input: number[]): number => {
  let foundDuplicate = 0;
  const lookUp: number[] = [];

  // tslint:disable
  [...input].reduce(
    (
      accumulator: number,
      currentValue: number,
      currentIndex: number,
      loopedArray: number[],
    ): number => {
      const nextResult = accumulator + currentValue;

      const lookupResult:number|undefined = lookUp.find(
        (loopedResult) => (loopedResult === nextResult)
      );

      if (lookupResult !== undefined) {
        foundDuplicate = lookupResult;
        console.log(`result found at ${currentIndex}`);
        loopedArray.splice(1);
        return nextResult;
      }
      lookUp.push(nextResult);
      return nextResult;
    },
  );

  return foundDuplicate;
};

const result = main(arrNumbers);
console.log(result);

export default main;
