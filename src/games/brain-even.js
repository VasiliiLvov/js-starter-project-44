#!/usr/bin/env node
import readlineSync from 'readline-sync';
import printhello from '../src/cli.js';
printhello();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let p = 0;
while (p < 3) {
  p += 1;
  const num = Math.floor(Math.random() * 10);
  console.log(`Question: ${num}`);
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
  } 
}
if (p > 2) {
  console.log(`Congratulations,${name}`);
}
