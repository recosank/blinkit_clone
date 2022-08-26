import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    phone: String,
    cart: [],
  },
  { timestamps: true }
);

export default mongoose.models.userDatadb ||
  mongoose.model("userDatadb", userSchema);
