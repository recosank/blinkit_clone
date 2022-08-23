import mongoose from "mongoose";

const ItemSchema = mongoose.Schema(
  {
    name: String,
    cover: {
      data: Buffer,
    },
    amount: String,
    discount: Number,
    price: Number,
    brand: String,
    cato: String,
  },
  { timestamps: true }
);

export default mongoose.models.itemsdb || mongoose.model("itemsdb", ItemSchema);
