"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
class Transactions {
    id;
    type;
    amount;
    date = new Date();
    description;
    constructor(type, amount, description, date) {
        this.id = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        this.type = type;
        this.amount = amount;
        this.date = date ?? new Date();
        this.description = description;
    }
}
exports.Transactions = Transactions;
//# sourceMappingURL=Transactions.js.map