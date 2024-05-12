"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booked = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BookedSchema = new mongoose_1.default.Schema({
    restaurantId: { type: String, required: true },
    tableNumber: { type: Number, required: true },
    day: { type: Date, required: true },
    user: { type: String, required: true },
});
exports.Booked = mongoose_1.default.model('Booked', BookedSchema);
//# sourceMappingURL=Booked.js.map