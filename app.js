// 🟢🟡🟠🔴🔵🟣1
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// const country = "Iran" ;
// const continent = "Asia" ;
// let population = 80000000 ;
// console.log(country , continent , population);
// 🟢🟡🟠🔴🔵🟣2
// LECTURE: Data Types.
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// let isIsland = false ;
// let language ;
// console.log(country , continent , population , isIsland , language);
// 🟢🟡🟠🔴🔵🟣3
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
// 🟢🟡🟠🔴🔵🟣4
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
// 🟢🟡🟠🔴🔵🟣5
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
// 🟢🟡🟠🔴🔵🟣6
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
// 🟢🟡🟠🔴🔵🟣7
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
// 🟢🟡🟠🔴🔵🟣8
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
// 🟢🟡🟠🔴🔵🟣9
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
// 🟢🟡🟠🔴🔵🟣10
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
// 🟢🟡🟠🔴🔵🟣11
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
// 🟢🟡🟠🔴🔵🟣12
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
// 🟢🟡🟠🔴🔵🟣13
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const dolphinsScore = calcAverage(44, 23, 71);
// const koalasScore = calcAverage(65, 54, 49);
// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     return `dolphins score is ${dolphinsScore} . dolphins are winner .`;
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     return `dolphins score is ${koalasScore} . dolphins are winner .`;
//   } else {
//     return `both of them looser .`;
//   }
// };
// console.log(checkWinner(dolphinsScore, koalasScore));

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [tips[0]+ bills[0] ,tips[1]+ bills[1] ,tips[2]+ bills[2] ]

// console.log(tips);

// console.log(total);
// 🟢🟡🟠🔴🔵🟣14
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

// const infoPerson1 = {
//   fristName : 'Mark' ,
//   lastName : 'Miller' ,
//   mass : 78 ,
//   height : 1.69 ,
//   calcBMI : function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   }
// }

// const infoPerson2 = {
//   fristName : 'John' ,
//   lastName : 'Smith' ,
//   mass : 200 ,
//   height : 1.95 ,
//   calcBMI : function () {
//     this.bmi = this.mass / this.height ** 2 ;
//     return this.bmi
//   }
// }

// infoPerson1.calcBMI() ;
// infoPerson2.calcBMI() ;

// if (infoPerson1.bmi > infoPerson2.bmi) {
//   console.log(`${infoPerson1.fristName}'s BMI ${infoPerson1.bmi} higher than ${infoPerson2.fristName}'s BMI ${infoPerson2.bmi}`);
// }else if (infoPerson2.bmi > infoPerson1.bmi) {
//   console.log(`${infoPerson2.fristName}'s BMI ${infoPerson2.bmi} higher than ${infoPerson1.fristName}'s BMI ${infoPerson1.bmi}`);
// }else{
//   console.log(`both are equall BMI`);
// }
// 🟢🟡🟠🔴🔵🟣14
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀

// const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52 ] ;
// const totals = [] ;
// const tips = [] ;
// for (let i = 0; i < bills.length; i++) {
//   const calculates = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
//   tips.push(calculates);
//   totals.push(calculates+bills[i]);
// }
// console.log(tips , totals);

// const calcAverage = function (arr) {
//   let sum = 0 ;
//   for (let i = 0; i < arr.length; i++) {
// sum += arr[i]
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage(tips));
// 🟢🟡🟠🔴🔵🟣16
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the consol
// debugger ;

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//  capital city is ${capitalCity}`;
// };
// console.log(describeCountry("Iran", 80, "Tehran"));
// 🟢🟡🟠🔴🔵🟣17
// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
// Declarations Function :
// function percentageOfWorld1 (population) {
//   const percentage = (population / 7900 ) * 100 ;
//   return `Iran has ${population} million people, so it's about ${percentage}% of
//  the world population `
// } ;
// console.log(percentageOfWorld1(80));
// Expression Function :
// const percentageOfWorld2 = function (population) {
//   const percentage = (population / 7900 ) * 100 ;
//   return `China has ${population} million people, so it's about ${percentage}% of
//  the world population `
// } ;
// console.log(percentageOfWorld2(1000));
// Arrow Function:
// const percentageOfWorld3 = (populationWorld) => (populationWorld / 7900) * 100;
//  console.log(percentageOfWorld3(12));
// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld3(population) ;
//   return `${country} has ${population} million people,which is about ${percentage} of the world. `
// };
// console.log(describePopulation('Iran' , 80));
// 🟢🟡🟠🔴🔵🟣18
// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// const populations = [3000, 450, 1240, 2356, 120, 2345, 980, 73629];
// const percentages = [];
// function populationWorld() {
//   for (let i = 0; i < populations.length; i++) {
//     percentages.push((populations[i] / 7900) * 100);
//   }
// }
// populationWorld();
// console.table(percentages);
// 🟢🟡🟠🔴🔵🟣19
// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// const neighbours = ["England", "USA", "Spain", "Turky", "Sweden"];

// neighbours.push("Utopia");
// // console.log(neighbours);

// neighbours.pop();
// // console.log(neighbours);

// if (neighbours.includes("German")) {
//   console.log("Probably not a central European country :D");
// } else {
//   console.log("A central European country :D");
// }

// neighbours[neighbours.indexOf("USA")] = "The USA";

// console.log(neighbours);
// 🟢🟡🟠🔴🔵🟣20
// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
//   country: "Iran",
//   capital: "Tehran",
//   language: "Persion",
//   population: 80000000,
//   neighbours: ["turky", "Iraq", "Spain", "France"],
// };
// 🟢🟡🟠🔴🔵🟣21
// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million usin

// myCountry.population += 20000;
// console.table(myCountry.population);
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} people , ${myCountry.neighbours.length} countries
//     and a capital called ${myCountry.capital}. `);
// 🟢🟡🟠🔴🔵🟣22
// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// const myCountry = {
//   country: "Iran",
//   capital: "Tehran",
//   language: "Persion",
//   population: 80000000,
//   neighbours: ["turky", "Iraq", "Spain", "France"],
//   describe: function () {
//     console.log(`${this.country} has ${this.population} ${this.language} people , ${this.neighbours.length} countries
//      and a capital called ${this.capital}. `);
//   },
//   checkIsland: function () {
//     this.isIsland =
//       this.neighbours.length === 0
//         ? console.log(`${this.country} has not any neighbour`)
//         : console.log(`${this.country} has neighbours`);
//   },
// };
// myCountry.describe();
// myCountry.checkIsland();
// 🟢🟡🟠🔴🔵🟣23
// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for (let i = 0; i <= 50; i++) {
//   console.log( `Voter number ${i} is currently voting`);
// }
// 🟢🟡🟠🔴🔵🟣24
// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// const populations = [3000, 450, 1240, 2356, 120, 2345, 980, 73629];
// const percentages2 = []
// for (let i = 0; i < populations.length; i++) {
//         percentages2.push((populations[i] / 7900) * 100);
// }
// console.table(percentages2);

// 🟢🟡🟠🔴🔵🟣25
// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i <listOfNeighbours.length; i++) {
//     for (let y = 0; y < [i].length; y++)
// console.log(` list is : ${listOfNeighbours[i][y]}`);
// }
// 🟢🟡🟠🔴🔵🟣26
/*
// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

const populations = [309,90, 1240, 2396, 190, 2395, 990, 7399];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push((populations[i] / 7900) * 100);
  i++;
}
console.table(percentages3);
*/
// 🟢🟡🟠🔴🔵🟣27
/*
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log("..." + str);
};
printForecast(data1);
*/