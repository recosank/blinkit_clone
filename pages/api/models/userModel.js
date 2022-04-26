import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    profilePic: {
      data: Buffer,
    },
    cart: [],
  },
  { timestamps: true }
);

export default mongoose.models.userDatadb ||
  mongoose.model("userDatadb", userSchema);
