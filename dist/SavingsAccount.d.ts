import { Account } from './Account';
export declare class SavingsAccount extends Account {
    private _interestRate;
    constructor(accountNumber: string, ownerName: string, initialbalance: number | undefined, interestRate: number);
    applyInterest(): number;
}
//# sourceMappingURL=SavingsAccount.d.ts.map