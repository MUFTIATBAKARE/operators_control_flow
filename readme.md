### Question 1

1. Arithmetic operators are:
   addition - "+"
   subtraction - "-"
   multiplication - "\*"
   division - "/"
   modulo - "%"
   exponential - "\*\*"
   increment - "++"
   decrement - "--"

2. Assignment operators are:
   Assignment operator "="
   Addition assignment operator "+="
   Subtraction assignment operator "-="
   Multiplication assignment operator "\*="
   Division assignment operator - "/="
   Modulus assignment operator - "%="

3. Comparison operators

   a) Relational operators are:
   Less than "<"
   Greater than ">"
   Greater than and equal to ">="
   Less than and equal to "<="

   b) Equality operators are:
   Loose equal to "=="
   Strict equal to "==="
   Loose not equal to "!="
   Strict not equal to "!=="

4. Logical operators
   AND "&&"
   OR "||"
   NOT "!"

5. Bitwise operators are:
   AND "&"
   XOR "^"
   OR "|"
   Not "~"
   Zero fill left shift "<<"
   Sign-propagating right shift ">>"
   Zero fill right shift ">>>"

### Question 2

Examples

Arithmetic operators:

let x = 80; let y = 30;

const a = 56; const b = 4;

addition - "+"

1.  console.log(a + b);
2.  console.log(x + y);

subtraction - "-"

1.  console.log(a - b);
2.  console.log(x - y);

multiplication - "\*"

1.  console.log(a \* b);
2.  console.log(x \* y);

division - "/"

1.  console.log(a / b);
2.  console.log(x / y);

modulo - "%"

1.  console.log(b % a);
2.  console.log(y % x);

exponential - "\*\*"

1.  console.log(a \*\* b);
2.  console.log(x \*\* y);

increment - "++"

1.  for(i = 0; i<=30; i++)
    {console.log('stutern')}
2.  console.log(y++);

decrement - "--"

1. for(i = 0; i<=30; i--)
   {console.log('stutern')}

2. console.log(y--);

Assignment operators:

Assignment operator "="

const car = "volvo";
let level = 500;

Addition assignment operator "+="

1.  for(i = 0; i<=30; i++)
    {sum+=i;} console.log(sum);
2.  let count = 0;
    while(count>=10){
    sum+=count;
    count++;
    }
    console.log(sum);

Subtraction assignment operator "-="

1. for(i = 0; i<=30; i++);
   {difference-=i;} console.log(difference);
2. let count = 0;
   while(count>=10){
   difference-=count;
   count++;
   }
   console.log(difference);

Multiplication assignment operator "\*="

1. for(i = 0; i<=30; i++);
   {multiplication\*=i;} console.log(multiplication);
2. let count = 0
   while(count>=10){
   multiplication\*=count;
   count++;
   }
   console.log(multiplication);

Division assignment operator - "/="

1.  for(i = 0; i<=30; i++)
    {division/=i;} console.log(division);
2.  let count = 0;
    while(count>=10){
    division/=count;
    count++;
    }
    console.log(division);

Modulus assignment operator - "%="

1.  for(i = 0; i<=30; i++)
    {modulo%=i;} console.log(modulo);

2.  let count = 0;
    while(count>=10){
    modulo%=count;
    count++;
    }
    console.log(modulo);

Comparison operators
a. Relational operators:

Less than "<"

1.  let candy = 50;
    let trickOrTreat = candy < 10 ? trick : treats
    console.log(trickOrTreat);

2.  let averageScore = 80;
    let studentScore = 50;
    if(studentScore < averageScore){
    console.log ("Kindly defer to next cohort")};
    else{console.log("you can proceed to theintermediate phase") };

Greater than ">"

1.  let candy = 50;
    let trickOrTreat = candy > 10 ? treats : trick;
    console.log(trickOrTreat);

2.  let averageScore = 80;
    let studentScore = 50;
    if(studentScore > averageScore){
    console.log ("you can proceed to theintermediate phase")};
    else{console.log("Kindly defer to next cohort") };

Greater than and equal to ">="

1.  let candy = 50;
    let trickOrTreat = candy >= 10 ? treats : trick;
    console.log(trickOrTreat);

2.  let averageScore = 80;
    let studentScore = 50;
    if(studentScore >= averageScore){
    console.log ("you can proceed to theintermediate phase")};
    else{console.log("Kindly defer to next cohort") };

Less than and equal to "<="

1.  let candy = 50;;
    let trickOrTreat = candy <= 10 ? trick : treats;
    console.log(trickOrTreat);

2.  let averageScore = 80;
    let studentScore = 50;
    if(studentScore <= averageScore){
    console.log ("Kindly defer to next cohort")};
    else{console.log("you can proceed to theintermediate phase") };

b) Equality operators

Loose equal to "=="

1.  let currentAge = 25
    let officialAge = "25"
    if (currentAge == officialAge){
    console.log(true)
    }
    else{
    console.log(false)
    }

2.  let countryIndependence = "1960"
    if (countryIndependence == 1960){
    console.log(true)
    }
    else{
    console.log(false)
    }

Strict equal to "==="

1.  let currentAge = 25
    let officialAge = "25"
    if (currentAge === officialAge){
    console.log(true)
    }
    else{
    console.log(false)
    }

2.  let countryIndependence = "1960"
    if (countryIndependence === 1960){
    console.log(true)
    }
    else{
    console.log(false)
    }

Loose not equal to "!="

1.  let currentAge = 25
    let officialAge = "25"
    if (currentAge != officialAge){
    console.log(false)
    }
    else{
    console.log(true)
    }

2.  let countryIndependence = "1960"
    if (countryIndependence != 1960){
    console.log(false)
    }
    else{
    console.log(true)
    }

Strict not equal to "!=="

1. let currentAge = 25
   let officialAge = "25"
   if (currentAge !== officialAge){
   console.log(false)
   }
   else{
   console.log(true)
   }

2. let countryIndependence = "1960"
   if (countryIndependence !== 1960){
   console.log(false)
   }
   else{
   console.log(true)
   }

Logical operators:

AND "&&"

1.  let baby;
    let babyGender;
    let foetalStatus = "alive";
    let foetalStatus2 = "Please repeat scan in two weeks time";
    let sexReveal = "BOY!";
    let sexReveal2 = "GIRL!";

    baby = "viable";
    babyGender = "xy";

    if(baby === "viable" && babyGender === "xx"){
    console.log("Your baby is " + foetalStatus + " and it's a " + sexReveal2)
    }

    else if(baby === "viable" && babyGender === "xy"){
    console.log("Your baby is " + foetalStatus + " and it's a " + sexReveal)
    }

    else
    console.log(foetalStatus2);

2.  let cashWithdrawal;
    let currencyType;

    let newNote = "unavailable";
    let oldNote = "available";

    cashWithdrawal = 500;
    currencyType = "newNote";
    if(cashWithdrawal >= 500 && currencyType === "newNote"){
    console.log(newNote);
    }
    else
    console.log(oldNote);

OR "||"

1.  let gender;
    let sex = "confirmed!"
    let others = "You can only be either a girl or a boy";

gender = "boy";

if(gender === "boy" || gender === "girl"){
console.log("your gender is " + sex)
}

else{
console.log(others)
}

2. let cashWithdrawal;
   let currencyType;

   let newNote = "unavailable";
   let oldNote = "available";

   cashWithdrawal = 1000;
   currencyType = "newNote";
   if(cashWithdrawal >= 500 || currencyType === "newNote"){
   console.log(newNote);
   }
   else
   console.log(oldNote);

NOT "!"

1.  let goodGrades = true;
    let failed = !goodGrades;
    console.log(failed);

2.  let EligibleForScholarship = false;
    let applicationDenied = !EligibleForScholarship;
    console.log(applicationDenied);

Bitwise operators

AND "&"

1.  const x = 8;
    const y = 15;

    z = x & y;
    console.log(z);

2.  let x = 10;
    let y = 24;

    z = x & y;
    console.log(z);

XOR "^"

1.  const x = 8;
    const y = 15;

    z = x ^ y;
    console.log(z);

2.  let x = 10;
    let y = 24;

    z = x ^ y;
    console.log(z);

OR "|"

1.  const x = 8;
    const y = 15;

    z = x | y;
    console.log(z);

2.  let x = 10;
    let y = 24;

    z = x | y;
    console.log(z);

Not "~"

1. const x = 15;

   result = ~x;

   console.log(result);

2. let y = 25;

   result2 = ~y;

   console.log(result2);

Left shift "<<"

1.  const x = 8;

    const y = 1;

    z = a << b;

    console.log(z);

2.  let a = 14;
    let b = -3;
    c = a >> b;
    console.log(c);

Sign-propagating right shift ">>"

1.  const x = 8;

    const y = 1;

    z = x >> y;

    console.log(z);

2.  let a = 14;
    let b = -3;
    c = a >> b;
    console.log(c);

Zero fill right shift ">>>"

1.  const x = 8;

    const y = 1;

    z = x >>> y;

    console.log(z);

2.  let a = 14;
    let b = -3;
    c = a >>> b;
    console.log(c);

### Question 4

Result of the code
"for (let i = 1; i<20; i+= 7){
console.log(i);
}" when executed is-
1
8
15
