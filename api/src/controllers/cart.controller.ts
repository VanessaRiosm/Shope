import {Request, Response} from 'express'
import {Cart} from '../models/cartSchema'
// import {User} from '../models/userSchema'

export const addToCart = async (req: Request, res: Response) => {
  const {usId} = req.params
  const {productId, name, quantity, price} = req.body

  try {
    if (productId && name && quantity && price) {
      //buscamos si usuario tiene carrito
      let cart = await Cart.findOne({usId})

      console.log(cart)
      if (cart) {
        //si tiene carrito, buscamos el index de el producto (para confirmar si existe)
        const itemIndex = cart.products.findIndex(
          (p) => p.productId == productId
        )

        console.log(itemIndex)
        if (itemIndex > -1) {
          //si el producto existe en el carrito, se cambia la cantidad

          let productItem = cart.products[itemIndex]

          productItem.quantity = productItem.quantity + quantity
          productItem.totalValue = productItem.price * productItem.quantity

          const sub = cart.subTotal + productItem.price

          cart.products[itemIndex] = productItem
          cart.subTotal = sub

          // User.cart.push(productItem)
          //
        } else {
          cart.subTotal = price
          cart.products.push({productId, quantity, name, price})
        }
        cart = await cart.save()
        return res.status(201).json(cart)

        //
      } else {
        //el usuario no tiene carrito

        const newCart = await Cart.create({
          usId,
          products: [{productId, quantity, name, price}],
          subTotal: price,
        })

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
