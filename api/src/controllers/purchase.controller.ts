import {Request, Response} from 'express'
import Stripe from 'stripe'
import {Cart} from '../models/cartSchema'
import {Sale} from '../models/saleSchema'
import {customAlphabet} from 'nanoid'
import {User} from '../models/userSchema'

export const makePurchase = async (req: Request, res: Response) => {
  const stripe = new Stripe(process.env.PRIVATE_KEY, {apiVersion: '2023-08-16'})

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

    const currentDate = new Date().toLocaleString()

    const sale = await Sale.create({
      orderNum,
      date: currentDate,
      status: 'pending',
      products: cart.products,
      total: cart.subTotal,
    })

    cart.products = []
    cart.subTotal = 0
    cart.productsQty = 0
    await cart.save()

    user.sales.push(sale)
    await user.save()

    res.json({orderNum: sale.orderNum})
  } catch (error) {
    console.log(error)
    return res.json({message: error.raw.message})
  }
}
