export class Account {
    public accountNumber: string;
    public ownerName: string;
    private _balance: number

    constructor(accountNumber:string, ownerName:string, initialBalance:number = 0){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this._balance = initialBalance
    }

    deposit(amount:number): void{
        this._balance += amount;
    };

    withdraw(amount:number): void{
        this._balance -= amount;
    };

    getBalance(): number{
        return this._balance;
    };

}