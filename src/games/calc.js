import startBrainGames from '../index.js';

const question = 'What is the result of the expression?';
const calculator = () => {
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
  return [`${calcA} ${d} ${calcB}`, b];
};
const runCalcGame = () => {
  startBrainGames(question, calculator);
};

export default runCalcGame;
