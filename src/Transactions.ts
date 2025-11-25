import { Account } from "./Account";
export type TransactionsType = "DEPOSIT" | "WITHDRAW" | "TRANSFER";

export class Transactions {
    public readonly id: string;
    public readonly type: TransactionsType;
    public readonly amount:number;
    public readonly date = new Date();
    public readonly description?: string | undefined;

    constructor(type:TransactionsType, amount:number, description?: string, date?: Date) {
        this.id = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        this.type = type;
        this.amount = amount;
        this.date = date ?? new Date();
        this.description = description;
    }  

}