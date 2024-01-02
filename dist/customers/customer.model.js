"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});
const CustomerModel = mongoose.model('Customer', customerSchema);
exports.default = CustomerModel;
//# sourceMappingURL=customer.model.js.map