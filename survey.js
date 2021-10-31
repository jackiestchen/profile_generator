// import * as readline from 'node:readline/promises';
const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favorite (eg: dinner, brunch, etc) ",
  "What's your favorite thing to eat for that meal? ",
  "Which sport is your absolute favorite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
]

let answers = [];

let question = util.promisify(rl.question).bind(rl);

async function ask(questionArray) {
  for (const ques of questionArray) {
    answers.push(
      await question(ques)
    );
  }
  rl.close();
}


async function print(questionArray) {
  await ask(questionArray);
  let name = answers[0];
  let favoriteActivity = answers[1];
  let favoriteMusic = answers[2];
  let favoriteMeal = answers[3].toLowerCase();
  let favoriteFood = answers[4].toLowerCase();
  let favoriteSport = answers[5];
  let superpower = answers[6].toLowerCase();
  console.log(`${name} loves listening to ${favoriteMusic} while ${favoriteActivity}, devouring ${favoriteFood} for ${favoriteMeal}, prefers ${favoriteSport} over any other sport, and is amazing at ${superpower}.`);
}

print(questions);


