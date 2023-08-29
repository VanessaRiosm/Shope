import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

interface cartState {
  cartItems: any | null
  cartTotalQuantity: number
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
}

const initialState = {
  cartItems: null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  status: 'idle',
  refresh: true,
} as cartState

export const fetchAddToCart: any = createAsyncThunk(
  'users/fetchAddToCart',
  async (ids: ids) => {
    const {userId, productId, name, price, quantity} = ids

    const response = await axios.put(`${URL}/cart/add/${userId}`, {
      productId,
      name,
      price,
      quantity,
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
      .addCase(fetchAddToCart.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })
  },
})

export const {} = cartSlice.actions
export default cartSlice.reducer