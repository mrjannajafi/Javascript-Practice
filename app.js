// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// const country = "Iran" ;
// const continent = "Asia" ;
// let population = 80000000 ;
// console.log(country , continent , population);

// LECTURE: Data Types.
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// let isIsland = false ;
// let language ;
// console.log(country , continent , population , isIsland , language);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

//  language = 'persian' ;
// isIsland = true ;
// console.log(language , isIsland ) ;

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

// const halfCountry = population / 2 ;
// console.log(halfCountry);
// population ++ ;
// console.log(population);
// const finland = 6000000 ;
// console.log(population > finland);
// console.log(population < 33000000);
// const description = country + " is in" +  continent +  " and its " + population + " people speak " + language ;
// console.log(description);

// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

// const markMass = 78 ;
// const johnMass = 92 ;
// const markHeight = 1.69 ;
// const johnHeight = 1.95 ;
// // const markMass = 95 ;
// // const johnMass = 85 ;
// //  const markHeight = 1.88 ;
// // const johnHeight = 1.76 ;
// const markBMI = markMass / (markHeight ** 2) ;
// const johnBMI = johnMass / (johnHeight ** 2) ;
// const markHigherBMI = markBMI > johnBMI ;
// console.log(markBMI , johnBMI) ;
// console.log(markHigherBMI);

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// if (markBMI > johnBMI ) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}!`)
// } else {
//     console.log(`John's BMI  ${johnBMI} is higher than Mark's BMI ${markBMI}!`)
// }

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// practice 1 :
// const dolphinsScoreFrist = 96 ;
// const dolphinsScoreSecond = 108 ;
// const dolphinsScoreThird = 89 ;
// const dolphinsAvrageScore = (96 + 108 + 89) / 3 ;

// const koalasScoreFrist = 88 ;
// const koalasScoreSecond = 91 ;
// const koalasScoreThrid = 110 ;
// const koalasAvrageScore = (88 + 91 +110) / 3 ;

// console.log( koalasAvrageScore  , dolphinsAvrageScore);

// practice 2 :

//  if (koalasAvrageScore > dolphinsAvrageScore) {
//     console.log( ` koala team is winner ${koalasAvrageScore}`);
//  } else if (dolphinsAvrageScore > koalasAvrageScore) {
//     console.log( `dolphin team is winner ${dolphinsAvrageScore}`);
//  }else if (dolphinsAvrageScore === koalasAvrageScore ) {
//     console.log( ` both team are winners . `);
//  }

//  practice 3 :

// const dolphinsScoreFrist = 97 ;
// const dolphinsScoreSecond = 112 ;
// const dolphinsScoreThird = 101 ;
// const dolphinsAvrageScore = (dolphinsScoreFrist + dolphinsScoreSecond + dolphinsScoreThird) / 3 ;

// const koalasScoreFrist = 101;
// const koalasScoreSecond = 97 ;
// const koalasScoreThrid = 112 ;
// const koalasAvrageScore = (koalasScoreFrist + koalasScoreSecond + koalasScoreThrid) / 3 ;

//  if (koalasAvrageScore > dolphinsAvrageScore && koalasAvrageScore >= 100 ) {
//     console.log( ` koala team is winner ${koalasAvrageScore}`);
//  } else if (dolphinsAvrageScore > koalasAvrageScore && dolphinsAvrageScore >= 100) {
//     console.log( `dolphin team is winner ${dolphinsAvrageScore}`);
//  }else if (dolphinsAvrageScore === koalasAvrageScore  &&  dolphinsAvrageScore >= 100 && koalasAvrageScore >= 100) {
//     console.log( ` both team are winners . `);
//  } else{
//    console.log( `none of them winner 😮`);
//  }

//  LECTURE: Type Conversion and Coercion
//  1. Predict the result of these 5 operations without executing them:
//  '9' - '5';
//  '19' - '13' + '17';
//  '19' - '13' + 17;
//  '123' < 57;
//  5 + 6 + '4' + 9 - 4 - 2;
//  2. Execute the operations to check if you were right

// let a = '9' - '5' ;// 4
// let b = '19' - '13' + '17' ;// 617
// let c = '19' - '13' + 17 ;// 23
// let d = '123' < 57 ; // false
// let e = 5 + 6 + '4' + 9 - 4 - 2 ;// 1143
// console.log(a , b ,c , d , e );

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// const numNeighbours = prompt ('How many neighbour countries does your country?')
// if (numNeighbours == 1 ){
//    console.log( 'Only 1 border!');
// }else if (numNeighbours > 1){
// console.log(`numNeighbours is greater than 1`);
// }else{
//    console.log('No borders');
// }

// const numNeighbours = Number( prompt ('How many neighbour countries does your country?'))
// console.log(numNeighbours);
// if (numNeighbours === 1 ){
//    console.log( 'Only 1 border!');
// }else if (numNeighbours > 1){
// console.log(`numNeighbours is greater than 1`);
// }else{
//    console.log('No borders');
// }

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// let language = 'english'
// let population = 220 ;
// let position = 'island' ;

// if (language === 'english' || population < 50 ||  position === 'island' ) {
//   console.log(`She find best country`);
// }else {
//    console.log(`She don't find best country `);
// }

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

// const bill = 1234;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
// console.log(`the bill was ${bill} , the tip was ${tip} and total value was ${bill + tip}`);

// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);
const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    return `dolphins score is ${dolphinsScore} . dolphins are winner .`;
  } else if (avgKoalas >= 2 * avgDolhins) {
    return `dolphins score is ${koalasScore} . dolphins are winner .`;
  } else {
    return `both of them looser .`;
  }
};
console.log(checkWinner(dolphinsScore, koalasScore));
