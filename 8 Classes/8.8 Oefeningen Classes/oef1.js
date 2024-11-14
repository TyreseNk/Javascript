class BankAccount {
    constructor(balance){
        this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
    }
    
    withdraw(amount){
        if(this.balance >= amount){
            this.balance-=amount;
        }else{
            console.log("insuficient balance");
        }
    }
    checkBalance(){
        console.log(this.balance);
    }
}

let bankAccount = new BankAccount(5000);
bankAccount.withdraw(30);
bankAccount.checkBalance();
bankAccount.deposit(800);
bankAccount.checkBalance();
bankAccount.withdraw(10000);
bankAccount.checkBalance();