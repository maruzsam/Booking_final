import mongoose, { Document, Model, Schema } from 'mongoose';

interface ITable extends Document {
    number: number;
    seatsNumber: number;
    type: string;
}

export const TableSchema: Schema<ITable> = new mongoose.Schema({
    number: { type: Number, required: true },
    seatsNumber: { type: Number, required: true },
    type: { type: String, required: false },
});


export const Table: Model<ITable> = mongoose.model<ITable>('Table', TableSchema);


