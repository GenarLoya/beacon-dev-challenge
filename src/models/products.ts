import mongoose from "mongoose";
import { TCategory } from "~/constants/categories";

export interface IProduct extends mongoose.Document {
  name: string;
  slug: string;
  description: string;
  price: number;
  category: TCategory;
  brand: string;
  stock: number;
  image: string;
  requiresPrescription: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const ProductDef = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "medicamentos",
        "suplementos",
        "cuidado-personal",
        "dispositivos-medicos",
      ],
    },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    requiresPrescription: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

ProductDef.index({ title: "text", author: "text" });

export const ProductSchema =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductDef);
