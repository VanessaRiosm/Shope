import {Schema, model} from 'mongoose'

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

export const Product = model('Product', productSchema)

productSchema.set('toJSON', {
  transform: (document, retunObject) => {
    retunObject.id = retunObject._id
    delete retunObject._id
  },
})
