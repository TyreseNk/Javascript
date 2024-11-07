const prompt = require("prompt-sync")();

// Maakt een localStorage aan indien dit nog niet gebeurd is.
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage; 
    localStorage = new LocalStorage('./scratch');
}

//bankaccount aanmaken
let bankAccount = {
    balance: 0
};
 //controleren of ere al een bankAccount in localstorage zit
let savedBankAccount = localStorage.getItem("bankAccount");
if(savedBankAccount){
    //zet JSON string om naar object
    bankAccount = JSON.parse(savedBankAccount);
}
//gebruikersinput vragen
console.log(`Your current balance is €${bankAccount.balance}`);
const interaction = prompt("Do you want to withdraw (W) or deposit (d)? ");
if(interaction=="w"){
    let amount = Number(prompt(`What amount would you like to withdraw? `));
    if (amount >= bankAccount.balance){
        console.log("insufficient balance");
    }else{
        bankAccount.balance-= amount;
    }
}else if( interaction=="d"){
    let amount = Number(prompt(`What amount would you like to deposit? `));
    bankAccount.balance+=amount;
}else{
    console.log("Enter 'W' to withdraw or 'd' to deposit. ");
}
console.log(`\n Your new balance is €${bankAccount.balance}\n`);
let bankAccountString = JSON.stringify(bankAccount);
localStorage.setItem("bankAccount",bankAccountString);
