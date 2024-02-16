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
  if (Number(sum) === b) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
    break;
  }
}
if (p > 2) {
  console.log(`Congratulations,${name}`);
}
console.log('What number is missing in the progression?');
 p = 0;
while (p < 3) {
  const lenOfNum = 5 + Math.floor(Math.random() * 10);
  const arr = [Math.floor(Math.random() * 100)];
  const progress = 1 + Math.floor(Math.random() * 5);
  for (let i = 0; i < lenOfNum; i += 1) {
    arr.push(arr[i] + progress);
  }
  const temp = Math.floor(Math.random() * arr.length);
  const quest = arr[temp];
  arr[temp] = '..';
  console.log(`Question: ${arr}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === quest) {
    console.log('Correct!');
    p += 1;
  } else {
    console.log('Wrong!');
    break;
  }
}
if (p < 3) {
  console.log(`Let's try again,${name}`);
} else {
  console.log(`Congratulations!${name}`);
}
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
p = 0;
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
//