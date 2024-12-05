/*
function inchToFeet(inch) {
  let feet = inch / 12;
  feet = parseInt(feet);
  let inchExtra = inch % 2;
  return `Person is ${feet} feet & ${inchExtra} inch`;
}
const personFeet = inchToFeet(95);
// console.log(personFeet);

// Miles to kilometer converter
function mileToKm(miles) {
  let km = miles * 1.6;
  return km;
}
const kilometer = mileToKm(69);
// console.log(kilometer);

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
let leapYear = isLeapYear(2032);
// console.log(leapYear);

const numbers = [11, 265, 144, 273, 99, 154, 268, 197, 333, 49, 22];

function odds(numbers) {
  let oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      oddNumbers.push(number);
    }
  }
  let oddLength = oddNumbers.length;
  let sum = 0;
  for (const oddNum of oddNumbers) {
    sum = sum + oddNum;
  }
  const avgOddResult = sum / oddLength;
  return avgOddResult;
}

const oddAvg = odds(numbers);
console.log(parseInt(oddAvg));

const firends = ["John", "Smith", "Steven", "Bob", "Micheal", "John", "Smith"];

function noDuplicate(arr) {
  const unique = [];
  for (const friend of arr) {
    if (unique.includes(friend) === false) {
      unique.push(friend);
    }
  }
  return unique;
}
const uniqueArr = noDuplicate(firends);
console.log(uniqueArr);

const numbers = [10, 54, 65, 87, 36, 98, 65, 14, 78, 65, 54];
function uniqueNumbers(arr) {
  const UniqueNums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let newArr = arr[i];
    if (UniqueNums.includes(newArr) === false) {
      UniqueNums.push(newArr);
    }
  }
  return UniqueNums;
}
const newNums = uniqueNumbers(numbers);
console.log(newNums);
*/
console.log(Math.round(4.4698));
console.log(Math.round(458.56));
console.log(Math.ceil(4.125));
console.log(Math.floor(3.125));
console.log(Math.trunc(9.999999));
console.log(Math.sign(10));
console.log(Math.pow(2, 3));
console.log(Math.pow(30, 99));
console.log(Math.sqrt(64));
console.log(Math.sqrt(9));
console.log(Math.abs(5, 15));
console.log(Math.abs(-55.88));
console.log(Math.min(10, 45, 87, 5, 9, 1548, 258, 2));
console.log(Math.max(10, 45, 87, 5, 9, 1548, 258, 2));
console.log(Math.random() * 20);
const randomNum = Math.random() * 100;
const randomInt = Math.round(randomNum);
console.log(randomInt);
