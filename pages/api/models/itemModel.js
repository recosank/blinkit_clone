import mongoose from "mongoose";

const ItemSchema = mongoose.Schema(
  {
    name: String,
    cover: {
      data: Buffer,
    },
    amount: String,
    oldPrice: Number,
    newPrice: Number,
    offNumber: String,
    cato: String,
  },
  { timestamps: true }
);

export default mongoose.models.itemsdb || mongoose.model("itemsdb", ItemSchema);
