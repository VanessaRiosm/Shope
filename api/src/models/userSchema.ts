import {Schema, model, Document, Types} from 'mongoose'

interface user extends Document {
  id: string
  username: string
  email: string
  password: string
  rol: string
  sales: string[]
  cart: Types.ObjectId
}

const userSchema = new Schema<user>({
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
  sales: [
    {
      id: String,
      orderNum: String,
      status: String,
      date: Date,
    },
  ],

  cart: [{type: Schema.Types.ObjectId, ref: 'Cart'}],
})

export const User = model<user>('User', userSchema)

userSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  },
})
