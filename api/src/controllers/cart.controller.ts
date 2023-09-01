import {Request, Response} from 'express'
import {Cart} from '../models/cartSchema'
import {User} from '../models/userSchema'

export const addToCart = async (req: Request, res: Response) => {
  const {usId} = req.params
  const {productId, name, quantity, price, image} = req.body

  try {
    if (productId && name && quantity && price && image) {
      //buscamos si usuario tiene carrito
      let cart = await Cart.findOne({usId})
      let user = await User.findById(usId)

      if (cart) {
        const itemIndex = cart.products.findIndex(
          (p) => p.productId == productId
        )

        //el producto existe
        if (itemIndex > -1) {
          let productItem = cart.products[itemIndex]

          productItem.quantity = productItem.quantity + quantity
          productItem.totalValue = productItem.price * productItem.quantity

          const sub = cart.subTotal + productItem.price

          cart.products[itemIndex] = productItem
          cart.subTotal = sub

          await cart.save()
          await user.updateOne({cart}, {cart})

          //el producto no existe
        } else {
          cart.subTotal = cart.subTotal + price
          cart.products.push({productId, quantity, name, price, image})
          await cart.save()
          await user.updateOne({cart}, {cart})
        }

        return res.status(201).json('ok')

        //
      } else {
        //el usuario no tiene carrito

        const newCart = await Cart.create({
          usId,
          products: [{productId, quantity, name, price, image}],
          subTotal: price,
        })

        await user.updateOne({cart}, {newCart})

        return res.status(201).json(newCart)
      }
    } else res.status(500).send('incomplete data')
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
}

export const removeFromCart = async (req: Request, res: Response) => {
  try {
    res.json('')
  } catch (err) {
    res.json(err.message)
  }
}
