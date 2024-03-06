import startBrainGames from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';
const calculator = () => {
  let num1 = Math.floor(1 + Math.random() * 100);
  let num2 = Math.floor(1 + Math.random() * 100);
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
  return [`${num1} ${num2}`, nod];
};
const runGCDGame = () => {
  startBrainGames(question, calculator);
};

export default runGCDGame;
