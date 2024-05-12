import mongoose, { Document, Model, Schema } from 'mongoose';

interface IBooked extends Document {
    restaurantId: string;
    tableNumber: number;
    day: Date;
    user: string;
}

const BookedSchema: Schema<IBooked> = new mongoose.Schema({
    restaurantId: { type: String, required: true },
    tableNumber: { type: Number, required: true },
    day: { type: Date, required: true },
    user: { type: String, required: true },
});


export const Booked: Model<IBooked> = mongoose.model<IBooked>('Booked', BookedSchema);

