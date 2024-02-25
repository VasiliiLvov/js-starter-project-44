#!/usr/bin/env node
import printhello from '../src/cli.js';
printhello();
var names = readlineSync.question('Your answer: ');
console.log(`Hello, ${names}`);