import startBrainGames from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateTask = () => {
  const num = 2 + Math.floor(Math.random() * 100);
  let divMeter = 0;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      divMeter += 1;
    }
  }
  let Rightanswer = '';
  if (divMeter === 0) {
    Rightanswer = 'yes';
  } else if (divMeter > 0) {
    Rightanswer = 'no';
  }
  return [num, Rightanswer];
};

const runPrimeGame = () => {
  startBrainGames(question, generateTask);
};

export default runPrimeGame;
