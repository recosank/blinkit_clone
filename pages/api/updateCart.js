import userDatadb from "./models/userModel";
import dbConnect from "../../lib/mongodb";
import auth from "../../middleware/auth";

export default async (req, res) => {
  if (req.method === "PATCH") {
    try {
      await auth(req, res);
      const { _id, name, amount, newPrice } = req.body;
      await dbConnect();
      const { userId } = req;
      let cartlist = await userDatadb.findById(userId);

      if (
        cartlist.cart.length > 0 &&
        cartlist.cart.some((val) => {
          console.log(val);
          return val._id.toString() == _id.toString();
        })
      ) {
        console.log("pll");
        await userDatadb.findOneAndUpdate(
          { _id: userId },
          {
            $pull: {
              cart: {
                _id,
                name,
                amount,
                newPrice,
              },
            },
          },
          { new: true, findAndModify: false }
        );

        res.status(204).json({ message: "removed successfully" });
      } else {
        console.log("psh");
        await userDatadb.findOneAndUpdate(
          { _id: userId },
          {
            $push: {
              cart: {
                _id,
                name,
                amount,
                newPrice,
              },
            },
          },
          { new: true, findAndModify: false }
        );

        res.status(200).json({ message: "added successfully" });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
