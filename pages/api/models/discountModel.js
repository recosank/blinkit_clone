import mongoose from "mongoose";

const DiscountSchema = mongoose.Schema(
  {
    title: String,
    cover: {
      data: Buffer,
    },
    cato: [],
    discount: Number,
  },
  { timestamps: true }
);

export default mongoose.models.discountdb ||
  mongoose.model("discountdb", DiscountSchema);
