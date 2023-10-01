import {Schema, model, Document, Types, now} from 'mongoose'

const saleSchema = new Schema({
  id: {
    type: String,
  },
  orderNum: {
    type: String,
  },
  status: {
    type: String,
    default: 'pending',
  },
  date: {
    type: String,
    default: new Date().toLocaleString(),
  },
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
  total: {type: Number},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
})

export const Sale = model('Sale', saleSchema)

saleSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  },
})
