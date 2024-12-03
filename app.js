function inchToFeet(inch) {
  let feet = inch / 12;
  feet = parseInt(feet);
  let inchExtra = inch % 2;
  return `Person is ${feet} feet & ${inchExtra} inch`;
}
const personFeet = inchToFeet(95);
console.log(personFeet);

// Miles to kilometer converter
function mileToKm(miles) {
  let km = miles * 1.6;
  return km;
}
const kilometer = mileToKm(69);
console.log(kilometer);
