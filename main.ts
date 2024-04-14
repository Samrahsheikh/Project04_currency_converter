#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \t Welcome to samrah_project04 - Currency Convertor\n"));

// Define the list of currencies and their exchange rates 
let exchange_rate: any = {
    "USD": 1,   //Base currency
    "EUR": 0.9, //Europeon Currency(Euro)
    "CAD": 1.3, //Canadian Dollar
    "JYP": 113, //Japanese Currency (Yen)
    "PKR": 277.70, //Pakistan Rupees
    "AUD": 1.65, //Australian dollar

    // Add more currencies and their exchange rates here
}
// Prompt the user select currencies to convertor form rates here
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert form:",
        choices: ["USD", "EUR", "CAD", "JYP", "PKR", "AUD"]
    },
    {
        name: "to_currency",
        type:"list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "CAD", "JYP", "PKR", "AUD"]
    },
 {
    name: "amount",
    type: "input",
    message: "Enter the amount to converter:"
 }   
]
);

// Perform Currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formula of conversion 
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);