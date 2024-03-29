import dbConnect from "../../lib/mongodb";
import userDatadb from "./models/userModel";
import auth from "../../middleware/auth";

export default async (req, res) => {
  if (req.method === "PATCH") {
    try {
      auth(req, res);
      const cartItem = req.body;
      await dbConnect();
      const { userId } = req;
      let cartlist = await userDatadb.findById(userId);
      const Ind = cartlist.cart.findIndex((i) => i._id === cartItem._id);
      if (Ind == -1) {
        await userDatadb.findOneAndUpdate(
          { _id: userId },
          {
            $push: {
              cart: cartItem,
            },
          },
          { new: true, findAndModify: false }
        );
        res.status(200).json({ message: "added successfully" });
      } else if (Ind >= 0 && cartItem.order == 0) {
        await userDatadb.findOneAndUpdate(
          { _id: userId },
          {
            $pull: {
              cart: {
                _id: cartItem._id,
              },
            },
          }
        );
        res.status(200).json({ message: "removed successfully" });
      } else {
        await userDatadb.updateOne(
          { _id: userId, "cart._id": cartItem._id },
          { $set: { "cart.$.order": cartItem.order } }
        );
        res.status(200).json({ message: "update successfully" });
      }
    } catch (error) {
      res
        .status(404)
        .json(
          "something went wrong plese check your information and try again"
        );
    }
  }
};
