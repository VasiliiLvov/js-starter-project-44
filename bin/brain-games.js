#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello,${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let p = 0;
while (p < 3) {
  p += 1;
  const num = Math.floor(Math.random() * 10);
  console.log(`Question:${num}`);
  const answer = readlineSync.question('Your answer: ');
  if ((num % 2) === 1 && answer === 'no') {
    console.log('Correct!');
  } else if ((num % 2) === 0 && answer === 'yes') {
    console.log('Correct!');
  } else if ((num % 2) === 1 && answer === 'yes') {
    console.log(`yes is wrong answer ;(. Correct answer was no. Let's try again, ${name}`);
    break;
  } else if ((num % 2) === 0 && answer === 'no') {
    console.log(`no is wrong answer ;(. Correct answer was yes. Let's try again, ${name}`);
    break;
  } else {
    console.log("use only 'yes' and 'no'.Try again");
    break;
  }
}
if (p > 2) {
  console.log(`Congratulations,${name}`);
}
console.log('brain calc');
console.log('What is the result of the expression?');
p = 0;
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
  if (sum === b) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
    break;
  }
}
if (p > 2) {
  console.log(`Congratulations,${name}`);
}
