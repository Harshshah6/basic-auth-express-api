import mongoose from 'mongoose';

export interface IUser {
    name:string;
    email:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);