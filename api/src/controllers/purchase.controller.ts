import {Request, Response} from 'express'
import Stripe from 'stripe'

const stripe = new Stripe(
  'sk_test_51NqhokKKnhStKev8T3INgmNiwPhggzCTozRS8SOXJX8S3GIhBsjBtV26zxhHC8mKDjMQnOh9ER3syC2fhTbGkKzc00T5M3EiiU',
  {apiVersion: '2023-08-16'}
)

export const makePurchase = async (req: Request, res: Response) => {
  const {id, amount} = req.body

  try {
    const totalAmount = amount * 100

    console.log(totalAmount)
    const payment = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: 'USD',
      description: 'Clothing',
      payment_method: id,
      payment_method_types: ['card'],
      confirm: true,
    })

    return res.status(200).json({message: 'Successful Payment'})
  } catch (error) {
    console.log(error)
    return res.json({message: error.raw.message})
  }
}
