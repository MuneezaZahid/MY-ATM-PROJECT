//ATM machine by Asiya Khan in typescript.
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin)
    console.log("Correct pin code!!!");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option:",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount:",
            type: "number",
        }
    ]);
    if (amountAns.amount < myBalance) {
        myBalance -= amountAns.amount;
        console.log(" Now your balance is " + myBalance);
    }
    else {
        console.log("insufficient balance");
    }
}
else if (operationAns.operation === "check balance") {
    console.log("your current balance is " + myBalance);
}
;
if (operationAns.operation === "fast cash") {
    let fastCash = await inquirer.prompt([
        {
            name: "fast",
            message: "how much money you want to withdraw:",
            type: "list",
            choices: ["1000", "2000", "5000"],
        }
    ]);
    if (fastCash.fast === "1000") {
        myBalance -= fastCash.fast;
        console.log(`your remaning balance is ${myBalance}`);
    }
    if (fastCash.fast === "2000") {
        myBalance -= fastCash.fast;
        console.log(`your remaning balance is ${myBalance}`);
    }
    if (fastCash.fast === "5000") {
        myBalance -= fastCash.fast;
        console.log(`your remaning balance is ${myBalance} `);
    }
}
else {
    console.log("invalid pin code");
}
