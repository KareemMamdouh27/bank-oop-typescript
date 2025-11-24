"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const Account_1 = require("./Account");
class SavingsAccount extends Account_1.Account {
    _interestRate;
    constructor(accountNumber, ownerName, initialbalance = 0, interestRate) {
        super(accountNumber, ownerName, initialbalance);
        this._interestRate = interestRate;
    }
    applyInterest() {
        const balance = this.getBalance();
        const interest = balance * (this._interestRate / 100);
        this.deposit(interest);
        return interest;
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map