class User {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }
    
    login(){
        console.log(`User ${this._name} is logged in`)
    }
}

class Admin extends User {
    constructor(name,email,privileges){
        super(name,email);
        this._privileges = privileges
    }

    changePrivileges(){
        console.log(`U heeft deze rechten ${this._privileges}`)
    }
}