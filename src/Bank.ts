import { Account } from "./Account";

export class Bank {

    private _accounts:Account[] = [];

    addAccount(account:Account) :void {
        this._accounts.push(account)
    }

    findAccount(accountNumber: string): Account | undefined {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i]?.accountNumber === accountNumber) {
                return this._accounts[i];
            }
        }
        return undefined;
    }
    

    transfer(from: string, to: string, amount: number): void {
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