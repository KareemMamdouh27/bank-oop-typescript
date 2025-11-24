"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    _accounts = [];
    addAccount(account) {
        this._accounts.push(account);
    }
    findAccount(accountNumber) {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i]?.accountNumber === accountNumber) {
                return this._accounts[i];
            }
        }
        return undefined;
    }
    transfer(from, to, amount) {
        const fromAcc = this.findAccount(from);
        const toAcc = this.findAccount(to);
        if (!fromAcc || !toAcc) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Transfer amount must be greater than 0");
        }
        fromAcc.withdraw(amount);
        toAcc.deposit(amount);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map