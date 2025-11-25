"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const Transactions_1 = require("./Transactions");
class Account {
    accountNumber;
    ownerName;
    _balance;
    _Transactions = [];
    constructor(accountNumber, ownerName, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this._balance = initialBalance;
    }
    deposit(amount) {
        this._balance += amount;
        const tx = new Transactions_1.Transactions("DEPOSIT", amount, "Deposit transaction");
        this._Transactions.push(tx);
    }
    ;
    withdraw(amount) {
        this._balance -= amount;
        const tx = new Transactions_1.Transactions("WITHDRAW", amount, "Withdraw Transaction");
        this._Transactions.push(tx);
    }
    ;
    getBalance() {
        return this._balance;
    }
    ;
    getTransactions() {
        return this._Transactions;
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map