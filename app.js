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
