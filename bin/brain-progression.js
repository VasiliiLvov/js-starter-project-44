#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello,${name}`);
console.log('What number is missing in the progression?')
let p=0 
while(p<3){
let lenOfNum = 5+ Math.floor( Math.random() * 10);
let arr =[Math.floor(Math.random() * 100)];
let progress = 1+ Math.floor(Math.random() * 5)
for(let i=0; i < lenOfNum;i++){
    arr.push(arr[i]+progress);
}
let temp = Math.floor(Math.random() * arr.length);
let quest = arr[temp];
arr[temp] = '..'
console.log('Question: '+arr);
const answer = readlineSync.question('Your answer: ');
if(Number(answer) === quest){
    console.log('Correct!');
    p+=1;
} else{
    console.log('Wrong!');
    break;
}
}
if(p<3){
console.log("Let's try again,"+name)
} else{
    console.log("Congratulations!"+name)
}
