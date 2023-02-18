//QUESTION 3}
/* options forb studentChoice are art, science, socialsciednce
 if studentChoice is art, print 'generalSubjects and artSubjects"
 if studentChoice is science, print 'generalSubjects and scienceSubjects"
 if studentChoice is socialscience, print 'generalSubjects and socialScienceSubjects"
 if studentChoice does not have a choice or says something not in the options above, print 'generalSubjects"
*/

let studentChoice = 'art';

let generalSubjects;
let artSubjects = "Government, Economics, Literature, History";
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
generalSubjects = "English, Mathematics";

if (studentChoice === 'science'){
    console.log("Your subjects are: " + generalSubjects + ", " + scienceSubjects + "!");
    } else if(studentChoice === 'socialScience'){
        console.log("Your subjects are: " + generalSubjects + ", " + socialScienceSubjects) + "!";
    } else if(studentChoice === 'art'){
        console.log("Your subjects are: " + generalSubjects + ", " + artSubjects + "!");
    }else{
        console.log("Your subjects are: " + generalSubjects + "!");
}

//QUESTION 5
/* positive number is num
*/
// let num = prompt ("Please enter a number:"); -----error
// let pwr = 0;
// let index = 1;
// do {
//     pwr = 2**index;
//     index++;
// } while (pwr > num);
// console.log("The mumber " + pwr + " is the power of 2 nearest to " + num);

// let num = 40; ----- error
// let pwr = 2;
// let index = 1;
// do {
//     pwr = 2**index;
    
// } while (pwr > num);
// console.log("The mumber " + pwr + " is the power of 2 nearest to " + num);
// index++;

// let num = 40; -----error
// let pwr = 2;
// let index = 1;
// do {
//     if (pwr **= index);
//     index++;
    
// } while (pwr < num);
// console.log("The mumber " + pwr + " is the power of 2 nearest to " + num);


//using while loop
// let num = 10;
// let pwr = 2;
// let index = 1;
// while (pwr < num) {
//     if (pwr **= index);
   
//     console.log("The mumber " + pwr + " is the power of 2 nearest to " + num);
//     index++;
// }
// let num = prompt ("Please enter a number:");
// let pwr = 2;
// let index = 0;
// while (num >= 0 && pwr < num) {
//     if (pwr = 2**index);
//     console.log("The mumber " + pwr + " is the power of 2 nearest to " + num);
//     index++;
// }
