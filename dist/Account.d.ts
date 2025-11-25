import { Transactions } from "./Transactions";
export declare class Account {
    accountNumber: string;
    ownerName: string;
    private _balance;
    private _Transactions;
    constructor(accountNumber: string, ownerName: string, initialBalance?: number);
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
    getTransactions(): Transactions[];
}
//# sourceMappingURL=Account.d.ts.map