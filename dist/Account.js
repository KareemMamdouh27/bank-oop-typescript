"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    accountNumber;
    ownerName;
    _balance;
    constructor(accountNumber, ownerName, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this._balance = initialBalance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    ;
    withdraw(amount) {
        this._balance -= amount;
    }
    ;
    getBalance() {
        return this._balance;
    }
    ;
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map