import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

interface cartState {
  cartItems: any | null
  cartTotalAmount: number
  status: string
  refresh: boolean
}

interface ids {
  userId: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

const initialState = {
  cartItems: null,
  cartTotalAmount: 0,
  status: 'idle',
  refresh: true,
} as cartState

export const fetchAddToCart: any = createAsyncThunk(
  'users/fetchAddToCart',
  async (ids: ids) => {
    const {userId, productId, name, price, quantity, image} = ids

    const response = await axios.put(`${URL}/cart/add/${userId}`, {
      productId,
      name,
      price,
      quantity,
      image,
    })

    return response.data
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      //añadiendo al carrito
      .addCase(fetchAddToCart.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAddToCart.fulfilled, (state, action) => {
        if (action.payload.products) {
          state.cartItems = action.payload.products
          state.cartTotalAmount = action.payload.subTotal
        }
        state.refresh = !state.refresh
        state.status = 'success'
      })
  },
})

export const {} = cartSlice.actions
export default cartSlice.reducer
