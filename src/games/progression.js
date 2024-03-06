import startBrainGames from '../index.js';

const question = 'What number is missing in the progression?';
const generateTask = () => {
  const lenOfNum = 5 + Math.floor(Math.random() * 10);
  const arr = [Math.floor(Math.random() * 100)];
  const progress = 1 + Math.floor(Math.random() * 5);
  for (let i = 0; i < lenOfNum; i += 1) {
    arr.push(arr[i] + progress);
  }
  const temp = Math.floor(Math.random() * arr.length);
  const Rightanswer = arr[temp];
  arr[temp] = '..';

  return [arr.join(' '), Number(Rightanswer)];
};
const runProgressionGame = () => {
  startBrainGames(question, generateTask);
};

export default runProgressionGame;
