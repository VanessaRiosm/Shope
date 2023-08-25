import {Schema, model, Document, Types} from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    default: 'user',
  },
  cart: [{type: Schema.Types.ObjectId, ref: 'Cart'}],
})

export const User = model('User', userSchema)

userSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  },
})
