import {Request, Response} from 'express'
import Stripe from 'stripe'
import {Cart} from '../models/cartSchema'
import {Sale} from '../models/saleSchema'
import {customAlphabet} from 'nanoid'
import {User} from '../models/userSchema'

const stripe = new Stripe(
  'sk_test_51NqhokKKnhStKev8T3INgmNiwPhggzCTozRS8SOXJX8S3GIhBsjBtV26zxhHC8mKDjMQnOh9ER3syC2fhTbGkKzc00T5M3EiiU',
  {apiVersion: '2023-08-16'}
)

export const makePurchase = async (req: Request, res: Response) => {
  const {userId} = req.params
  const {id} = req.body

  try {
    let cart = await Cart.findOne({userId})
    let user = await User.findById(userId)
    const val = `${Math.floor(cart.subTotal)}00`
    const totalVal = Number(val)

    const payment = await stripe.paymentIntents.create({
      amount: totalVal,
      currency: 'USD',
      description: 'Clothing',
      payment_method: id,
      payment_method_types: ['card'],
      confirm: true,
    })

    const nanoid = customAlphabet('0123456789', 10)
    const orderNum = nanoid()

    const currentDate = new Date().toString().substring(0, 25)
    const month = currentDate.slice(4, 7)
    const day = currentDate.slice(8, 10)
    const newDate = currentDate.replace(month + ' ' + day, day + ' ' + month)

    const sale = await Sale.create({
      orderNum,
      date: newDate,
      status: 'pending',
    })

    cart.products = []
    cart.subTotal = 0
    cart.productsQty = 0
    cart.save()

    user.sales.push(sale)
    user.save()

    res.json({orderNum: sale.orderNum})
  } catch (error) {
    console.log(error)
    return res.json({message: error.raw.message})
  }
}
