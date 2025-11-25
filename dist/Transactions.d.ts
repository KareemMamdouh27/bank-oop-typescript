export type TransactionsType = "DEPOSIT" | "WITHDRAW" | "TRANSFER";
export declare class Transactions {
    readonly id: string;
    readonly type: TransactionsType;
    readonly amount: number;
    readonly date: Date;
    readonly description?: string | undefined;
    constructor(type: TransactionsType, amount: number, description?: string, date?: Date);
}
//# sourceMappingURL=Transactions.d.ts.map