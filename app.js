// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "Iran" ;
const continent = "Asia" ;
let population = 80000000 ;
console.log(country , continent , population);

// LECTURE: Data Types.
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = false ;
let language ;
console.log(country , continent , population , isIsland , language);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

 language = 'persian' ;
isIsland = true ; 
console.log(language , isIsland ) ;

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

const halfCountry = population / 2 ;
console.log(halfCountry);
population ++ ;
console.log(population);
const finland = 6000000 ;
console.log(population > finland);
console.log(population < 33000000);
const description = country + " is in" +  continent +  " and its " + population + " people speak " + language ;
console.log(description);

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

const markMass = 78 ;
const johnMass = 92 ;
const markHeight = 1.69 ;
const johnHeight = 1.95 ;
// const markMass = 95 ;
// const johnMass = 85 ;
//  const markHeight = 1.88 ;
// const johnHeight = 1.76 ; 
const markBMI = markMass / (markHeight ** 2) ;
const johnBMI = johnMass / (johnHeight ** 2) ;
const markHigherBMI = markBMI > johnBMI ;
console.log(markBMI , johnBMI) ; 
console.log(markHigherBMI);

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

if (markBMI > johnBMI ) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}!`)
} else {
    console.log(`John's BMI  ${johnBMI} is higher than Mark's BMI ${markBMI}!`)
}

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

const dolphinsScoreFrist = 97 ;
const dolphinsScoreSecond = 112 ;
const dolphinsScoreThird = 101 ;
const dolphinsAvrageScore = (dolphinsScoreFrist + dolphinsScoreSecond + dolphinsScoreThird) / 3 ;

const koalasScoreFrist = 101;
const koalasScoreSecond = 97 ;
const koalasScoreThrid = 112 ; 
const koalasAvrageScore = (koalasScoreFrist + koalasScoreSecond + koalasScoreThrid) / 3 ;

 if (koalasAvrageScore > dolphinsAvrageScore && koalasAvrageScore >= 100 ) {
    console.log( ` koala team is winner ${koalasAvrageScore}`);
 } else if (dolphinsAvrageScore > koalasAvrageScore && dolphinsAvrageScore >= 100) {
    console.log( `dolphin team is winner ${dolphinsAvrageScore}`);
 }else if (dolphinsAvrageScore === koalasAvrageScore  &&  dolphinsAvrageScore >= 100 && koalasAvrageScore >= 100) {
    console.log( ` both team are winners . `);
 } else{
   console.log( `none of them winner 😮`);
 }


