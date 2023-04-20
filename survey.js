const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, hobby, musicGenre, meal, dish, sport, superpower;

rl.question('What is your name? ', (answer) => {
  name = answer;
  
  rl.question('What is your favourite hobby? ', (answer) => {
    hobby = answer;

    rl.question('What kind of music do you listen to while doing that? ', (answer) => {
      musicGenre = answer;

      rl.question('Out of Breakfast, Lunch and Dinner, which one is your favorite? ', (answer) => {
        meal = answer;

        rl.question('For that meal, what is your favorite dish? ', (answer) => {
          dish = answer;

          rl.question('What is your favorite sport? ', (answer) => {
            sport = answer;

            rl.question('What is your superpower, what are you amazing at? ', (answer) => {
              superpower = answer;

              // Print all answers
              console.log(`Your name is : ${name}`);
              console.log(`Your favorite hobby is : ${hobby}`);
              console.log(`Your favorite music genre is : ${musicGenre}`);
              console.log(`Your favorite meal is : ${meal}`);
              console.log(`Your favorite dish is : ${dish}`);
              console.log(`Your favorite sport is : ${sport}`);
              console.log(`Your superpower is : ${superpower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
