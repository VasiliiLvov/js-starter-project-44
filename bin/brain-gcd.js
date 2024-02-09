import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello,${name}`);
console.log('Find the greatest common divisor of given numbers.');
let l = Math.floor(Math.random() * 100);
const k = Math.floor(Math.random() * 100);
console.log('Question:' + ` ${l} ${k}`);
let j = 0;
let h = k;
if (l > k) {
  while ((l % k) !== 0 && k % h !== 0) {
    h -= 1;
  }
  j = h;
  console.log(j);
} else if (l < k) {
  while (k % l !== 0 && k % h !== 0) {
    l -= 1;
  }
  j = h;
  console.log(j);
} else if (l === k) {
  j = l;
  console.log(j);
}
const gcd = readlineSync.question('Your answer: ');
if (gcd === j) {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}
