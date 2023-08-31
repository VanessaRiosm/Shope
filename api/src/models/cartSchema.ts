import {Schema, model, Types, Document} from 'mongoose'

export interface CartSchema {
  userId: Types.ObjectId
  products: any
  subTotal: number
}

export interface CartSchemaDocument extends CartSchema, Document {
  createdAt: Date
  updatedAt: Date
  _doc?: any
}

const cartSchema = new Schema<CartSchemaDocument>({
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
})

export const Cart = model<CartSchemaDocument>('Cart', cartSchema)

cartSchema.set('toJSON', {
  transform: (document, retunObject) => {
    retunObject.id = retunObject._id
    delete retunObject._id
  },
})
