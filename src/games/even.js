import startBrainGames from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const calculator = () => {
  const num = Math.floor(Math.random() * 10);
  let Rightanswer = '';
  if ((num % 2) === 1) {
    Rightanswer = 'no';
  } else if ((num % 2) === 0) {
    Rightanswer = 'yes';
  }
  return [num, Rightanswer];
};
const runEvenGame = () => {
  startBrainGames(question, calculator);
};

export default runEvenGame;
