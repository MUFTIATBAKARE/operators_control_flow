//QUESTION 3}
/* options for studentChoice are art, science, socialsciednce
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
/**
 * - user enters a positive number
 * - positive number is 0 and above
 * - print power of 2 closest to the number entered by user
 * 
*/
let num = prompt ("Please enter a number:");
let pwr = 2;
let index = 0;
while (num >= 0 && pwr < num) {
    pwr = 2**index;
    index++;
 console.log("The mumber " + pwr + " is the power of 2 nearest to " + num);
}
