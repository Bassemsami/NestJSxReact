"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierSchema = void 0;
const mongoose = require("mongoose");
exports.supplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    location: { type: String, required: false },
    supplies: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=supplier.model.js.map