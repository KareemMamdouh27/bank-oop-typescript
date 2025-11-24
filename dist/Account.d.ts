export declare class Account {
    accountNumber: string;
    ownerName: string;
    private _balance;
    constructor(accountNumber: string, ownerName: string, initialBalance?: number);
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}
//# sourceMappingURL=Account.d.ts.map