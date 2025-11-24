import { Account } from "./Account";
export declare class Bank {
    private _accounts;
    addAccount(account: Account): void;
    findAccount(accountNumber: string): Account | undefined;
    transfer(from: string, to: string, amount: number): void;
}
//# sourceMappingURL=Bank.d.ts.map