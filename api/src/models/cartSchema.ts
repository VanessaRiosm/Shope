import {Schema, model} from 'mongoose'

const cartSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  products: [
    {
      productId: String,
      quantity: Number,
      image: String,
      name: String,
      price: Number,
      totalValue: Number,
    },
  ],
  subTotal: {
    type: Number,
    default: 0,
  },
  productsQty: {
    type: Number,
    default: 0,
  },
})

export const Cart = model('Cart', cartSchema)

cartSchema.set('toJSON', {
  transform: (document, retunObject) => {
    retunObject.id = retunObject._id
    delete retunObject._id
  },
})
