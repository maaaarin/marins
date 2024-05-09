import { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
  userClerkId: { type: String, required: true, unique: true, default: null },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", unique: true },
      quantity: { type: Number },
    },
  ],
  totalPrice: { type: Number, default: 0 },
  totalQuantity: { type: Number, default: 0 },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: "1m" },
  },
});

const Cart = models.Cart || model("Cart", cartSchema);
export default Cart;

// # guest(have a cart) > register > user(same cart)
// save cart on cache
// create cart on database? yeah? idk
// checkout without register? yes!

// # cart on database (guest only):
// no id... just items!
// keep them forever?
// no, not in database.
// yes! create them, but delete them after n days
// no id, just keep them in cache? I mean, yes! Keep them
// ok, for now just cache.

// # user log in (same cart) > log out(no cart) > log in again(same cart);
// save cart on database
// checkout normally
