"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.TableSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.TableSchema = new mongoose_1.default.Schema({
    number: { type: Number, required: true },
    seatsNumber: { type: Number, required: true },
    type: { type: String, required: false },
});
exports.Table = mongoose_1.default.model('Table', exports.TableSchema);
//# sourceMappingURL=Table.js.map