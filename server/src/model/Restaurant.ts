import mongoose, { Document, Model, Schema } from 'mongoose';
import { TableSchema } from '../model/Table';

interface ITable extends Document {
    // itt add meg a Table schema mezőit
}

interface IRestaurant extends Document {
    name: string;
    tables: ITable[];
    menu: string;
}

const RestaurantSchema: Schema<IRestaurant> = new mongoose.Schema({
    name: { type: String, required: true },
    tables: [TableSchema],
    menu: { type: String, required: false },
});

export const Restaurant: Model<IRestaurant> = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
