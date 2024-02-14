#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello,${name}`);
let p = 0;
while (p < 3) {
  p += 1;
  const calcA = Math.floor(Math.random() * 100);
  const calcB = Math.floor(Math.random() * 100);
  const calcC = Math.floor(Math.random() * 3);
  let d = '0';
  let b = 0;
  if (calcC === 1) {
    b = calcA + calcB;
    d = '+';
  } else if (calcC === 0) {
    b = calcA + calcB;
    d = '+';
  } else if (calcC === 2) {
    b = calcA - calcB;
    d = '-';
  } else if (calcC === 3) {
    b = calcA * calcB;
    d = '*';
  }
  console.log(`Question:${calcA}${d}${calcB}`);
  const sum = readlineSync.question('Your answer: ');
  console.log(sum);
  if (Number(sum) === Number(b)) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
    break;
  }
}
if (p > 2) {
  console.log(`Congratulations,${name}`);
}
