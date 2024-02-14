#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello,${name}`);
console.log('Find the greatest common divisor of given numbers.');
let game = 0;
while (game < 3) {
  let num1 = Math.floor(1 + Math.random() * 100);
  let num2 = Math.floor(1 + Math.random() * 100);
  console.log(`Question:${num1} ${num2}`);
  let nod = 0;
  if (num2 > num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (let i = num2; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      nod = i;
      break;
    }
  }
  const gcd = readlineSync.question('Your answer: ');
  if (Number(gcd) === nod) {
    console.log('Correct!');
    game += 1;
  } else {
    console.log('Wrong!');
    break;
  }
}
if (game < 3) {
  console.log(`Try again,  ${name}`);
} else {
  console.log(`Congratulations,${name}`);
}
