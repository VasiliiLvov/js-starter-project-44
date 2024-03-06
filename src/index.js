import readlineSync from 'readline-sync';

const startBrainGames = (question, calculator) => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${names}!`);
  console.log(question);
  let p = 0;
  while (p < 3) {
    p += 1;
    const [quest, Rightanswer] = calculator();
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' || answer === 'no') {
      if (answer === Rightanswer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Rightanswer}'.`);
        console.log(`Let's try again, ${names}!`)
        break;
      }
    } else if (Number(answer) === Rightanswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Rightanswer}'.`);
      console.log(`Let's try again, ${names}!`)
      break;
    }
    if (p > 2) {
      console.log(`Congratulations, ${names}!`);
    } 
  }
};
export default startBrainGames;
