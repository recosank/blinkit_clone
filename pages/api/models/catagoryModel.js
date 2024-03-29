import mongoose from "mongoose";

const CatagorySchema = mongoose.Schema(
  {
    title: String,
    cover: {
      data: Buffer,
    },
    subCato: [],
    discount: Number,
  },
  { timestamps: true }
);

export default mongoose.models.catagorydb ||
  mongoose.model("catagorydb", CatagorySchema);
