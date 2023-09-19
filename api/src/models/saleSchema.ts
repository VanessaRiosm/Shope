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
    type: Date,
    default: now(),
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
})

export const Sale = model('Sale', saleSchema)

saleSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  },
})
