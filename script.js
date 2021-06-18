
/* it compares each case to the value of the expression. The switch statement is used when there are more case to be checked. */

let fruit = "Banana";

switch (fruit) {
  case "Apple": console.log("the first fruit ia a apple");
    break;

  case "Lemon": console.log("the fruit is a lemon");
    break;

  case "Strawberry": console.log("the fruit is a strawberry");
    break;

  case "Banana": console.log("the fruit is a banana");
    break;

  default: console.log("this is the default value when none of the cases were TRUE");

}

/* we declare a varible 'fruit' and gave a value of a: string "Banana" now we want to check weather some other string are "Banana" in this case we have many strings so we are going to need the SWITCH statement. 1st we write a SWITCH that has an expression. This expression is what we compare 'cases' to, we compare "apple" to the fruit varible "Banana", all of the cases as well as the default keyword, needs to be wrapped in the curley braces {}. each cases is compared to the expression untill the correct value is found.*/

