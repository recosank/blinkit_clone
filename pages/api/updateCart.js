import userDatadb from "./models/userModel";
import dbConnect from "../../lib/mongodb";
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
        console.log("update");
        await userDatadb.updateOne(
          { _id: userId, "cart._id": cartItem._id },
          { $set: { "cart.$.order": cartItem.order } }
        );
        res.status(200).json({ message: "update successfully" });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

//else {
//  try {
//    auth(req, res);
//    const { _id } = req.body;
//    await dbConnect();
//    const { userId } = req;
//    let cartlist = await userDatadb.findById(userId);
//  } catch (err) {
//    console.log(err);
//  }
//}
//};
