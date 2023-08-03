import {Schema, model} from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
  },
  picture: {
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
    default: 'client',
  },
  cart: {
    type: String,
  },
})

export const User = model('User', userSchema)
