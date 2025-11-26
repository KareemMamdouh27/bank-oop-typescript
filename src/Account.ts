import { Transactions, TransactionsType } from "./Transactions";
export class Account {
    public accountNumber: string;
    public ownerName: string;
    private _balance: number
    private _Transactions: Transactions[] = [];

    constructor(accountNumber:string, ownerName:string, initialBalance:number = 0){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this._balance = initialBalance
    }

    deposit(amount:number): void{
        this._balance += amount;
        const tx = new Transactions ("DEPOSIT", amount, "Deposit transaction");
        this._Transactions.push(tx);
    };

    withdraw(amount:number): void{
        this._balance -= amount;
        const tx = new Transactions("WITHDRAW", amount, "Withdraw Transaction")
        this._Transactions.push(tx)
    };

    getBalance(): number{
        return this._balance;
    };

        getTransactions(){
        return this._Transactions.slice();
    }

    filterTransactions (type:"DEPOSIT" | "WITHDRAW" | "TRANSFER" ) :Transactions[] {
        return this._Transactions.filter(tx => tx.type === type).slice();
    }

    getTransactionsByDateRange(startDate: Date, endDate:Date) :Transactions[]{
        const start = startDate.getTime()
        const end = endDate.getTime();

        return this._Transactions.filter(tx => {
            const txTime = tx.date.getTime();
            return txTime >= start && txTime <= end;
        }); 
    }

}