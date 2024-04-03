#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

async function welcome() {
    let title = chalkAnimation.rainbow("let start calculation:");
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
};
await welcome();

const answer = await inquirer.prompt([
{ message: "enter first number", type: "number", name: "firstnumber" },
{ message: "enter second number", type: "number", name: "secondnumber" },
{ message: "select any option to perform action", type: "list", name: "operator", choices: ["addition", "subtraction","division","multiplication"]}
])

if (answer .operator === "addition"){
    console.log (answer.firstnumber + answer.secondnumber);
}

else if (answer .operator === "subtraction"){
    console.log (answer.firstnumber - answer.secondnumber)
 }

else if (answer .operator === "division"){
    console.log (answer.firstnumber / answer.secondnumber)
}

else if (answer .operator === "multiplication"){
    console.log (answer.firstnumber * answer.secondnumber)
}

else {
    console.log ("please select walid operator")
}