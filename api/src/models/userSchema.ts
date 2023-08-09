import {Schema, model} from 'mongoose'

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
  cart: {
    type: String,
  },
})

export const User = model('User', userSchema)
