#!/usr/bin/env node

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
import readlineSync from 'readline-sync';

const name = readlineSync.question('Your answer: ');

console.log('Hello,'+name);