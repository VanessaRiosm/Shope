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
  image: string
}

interface removeIds {
  userId: string
  productId: string
}

interface purchaseId {
  id: string
}

const initialState = {
  cartItems: null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  status: 'idle',
  refresh: true,
} as cartState

export const fetchAddToCart = createAsyncThunk(
  'cart/fetchAddToCart',
  async (ids: ids) => {
    try {
      const {userId, productId, name, price, quantity, image} = ids

      const response = await axios.put(`${URL}/cart/add/${userId}`, {
        productId,
        name,
        price,
        quantity,
        image,
      })

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const fetchRemoveFromCart = createAsyncThunk(
  'cart/fetchRemoveFromCart',

  async (ids: removeIds) => {
    try {
      const {userId, productId} = ids

      const response = await axios.put(`${URL}/cart/remove/${userId}`, {
        productId,
      })

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const fetchMakePurchase = createAsyncThunk(
  'cart/fetchMakePurchase',

  async ({id}: purchaseId) => {
    try {
      const token = window.localStorage.getItem('token')

      const {data} = await axios.post(
        `${URL}/purchase/checkout`,
        {id},
        {headers: {Authorization: `Bearer ${token}`}}
      )
      return data
    } catch (error) {
      console.log(error)
    }
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

      // eliminando del carrito
      .addCase(fetchRemoveFromCart.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRemoveFromCart.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })
  },
})

export const {} = cartSlice.actions
export default cartSlice.reducer
