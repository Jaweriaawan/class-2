import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "type number", type: "number", name: "firstnumber" }
]);
console.log(answer);
