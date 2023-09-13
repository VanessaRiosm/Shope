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
          cart.subTotal = Number(sub.toFixed(2))
          cart.productsQty = cart.productsQty + 1

          await cart.save()
          await user.updateOne({cart}, {cart})

          //el producto no existe
        } else {
          let sub = cart.subTotal + price
          cart.subTotal = Number(sub.toFixed(2))
          cart.productsQty = cart.productsQty + 1
          cart.products.push({productId, quantity, name, price, image})
          await cart.save()
          await user.updateOne({cart}, {cart})
        }

        return res.status(201).json(cart)

        //
      } else {
        //el usuario no tiene carrito

        const newCart = await Cart.create({
          usId,
          products: [{productId, quantity, name, price, image}],
          subTotal: price,
          productsQty: 1,
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
  const {usId} = req.params
  const {productId} = req.body

  try {
    let cart = await Cart.findOne({usId})
    let user = await User.findById(usId)

    const itemIndex = cart.products.findIndex((p) => p.productId == productId)
    let product = cart.products[itemIndex]
    let products = cart.products
    let total = cart.subTotal - product.quantity * product.price

    cart.subTotal = Number(total.toFixed(2))
    cart.productsQty = cart.productsQty - product.quantity
    products.splice(itemIndex, 1)
    cart.products = products

    if (cart.productsQty < 0) {
      cart.productsQty = 0
      cart.subTotal = 0
    }
    await cart.save()
    await user.updateOne({cart}, {cart})
    res.status(200).json(cart)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
