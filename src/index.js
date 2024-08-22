const { default: inquirer } = require("inquirer");

console.log("dice roller app is now running!");


/**
 * Generate a random number between 1 and diceSize, inclusive.
 * @param {number} diceSize The maximum that the dice can roll.
 * @returns {number} The number rolled on dice.
 */
function rollDice(diceSize = 20){
    let diceResult = 0;


    diceResult = Math.ceil(Math.random() * diceSize);

    return diceResult;
}


// console.log("random dice roll result is: " + rollDice());


const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "number",
        name: "dice_size",
        message: "what size of dice do you want to roll?"
    }
]).then((answer) => {
    console.log("raw answer data from the prompt package is:" + JSON.stringify(answer));
    console.log(rollDice(answer.dice_size));
});