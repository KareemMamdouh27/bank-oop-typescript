import { Account } from './Account'

export class SavingsAccount extends Account {
    private _interestRate: number;
    constructor (accountNumber:string, ownerName:string, initialbalance:number = 0, interestRate:number) {
        super(accountNumber,ownerName, initialbalance)
        this._interestRate = interestRate;
    }

    applyInterest() : number{
        const balance = this.getBalance()
        const interest = balance * (this._interestRate / 100);
        this.deposit(interest);
        return interest;
    }

}