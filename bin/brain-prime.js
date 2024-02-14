#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello,${name}`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let p = 0;
while (p < 3) {
  const num = 2 + Math.floor(Math.random() * 100);
  let divMeter = 0;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      divMeter += 1;
    }
  }
  console.log(`Question:${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes' && divMeter === 0) {
    console.log('Correct!');
    p += 1;
  } else if (answer === 'no' && divMeter > 0) {
    console.log('Correct!');
    p += 1;
  } else {
    console.log('Wrong!');
    break;
  }
}
if (p < 3) {
  console.log(`Try again,  ${name}`);
} else {
  console.log(`Congratulations,${name}`);
}
