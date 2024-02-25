#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
var names = readlineSync.question('Your answer: ');
console.log(`Hello, ${names}`);
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
  } else if (answer === 'yes' && divMeter > 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${names}!`);
    break;
  } else if (answer === 'no' && divMeter === 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${names}!`);
    break;
  }
}
if (p >= 3) {
  console.log(`Congratulations, ${names}!`);
}
