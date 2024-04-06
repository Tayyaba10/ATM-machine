#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 30000;
let myPin: number = 1038;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin == myPin) {
  console.log("Correct pin number");

 let accountType = await inquirer.prompt([
    {
      name: "account",
      message: "choose your account type",
      type: "list",
      choices: ["current account", "saving account"],
    },
    ]);

   let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option ",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
   ])

  if (operationAnswer.operation === "withdraw") {
   let amountAns = await inquirer.prompt([
     {
       name: "amount",
       message: "Enter your amount",
       type: "number",
     },
   ]);
   
   if (myBalance >= amountAns.amount){ 
   myBalance -= amountAns.amount

   console.log("Sucessfully withdraw.THANK YOU!");

   console.log(`Your remaining balance is: ${myBalance}`);
   }
  
   else{
    console.log(`Insufficient balance`);
  }
 };
  if (operationAnswer.operation === "check balance") {
    console.log(`Your balance is: ${myBalance}`);
    }
  if (operationAnswer.operation == "fast cash") {
    let fastAmount = await inquirer.prompt([
      {
        name: "fastcash",
        message: "Select your amount you want to withdraw",
        type: "list",
        choices: ["1000", "2000", "3000", "4000", "5000", "10000"],
      }, 
    ]);
    if (myBalance >= fastAmount.fastcash){
        myBalance -= fastAmount.fastcash;
        console.log("Sucessfully withdraw");
        console.log(`Your remaining balance is: ${myBalance}`);
      }
  } 
 
} 
else {
  console.log("Incorrect pin number.Please try again!");
}
