import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

interface ProductsState {
  productsList: any | null
  status: string
  productDetails: any | null
}

const initialState = {
  productsList: null,
  status: 'idle',
  productDetails: null,
} as ProductsState

export const fetchGetProducts: any = createAsyncThunk(
  'users/fetchGetProducts',
  async () => {
    const response = await axios.get(`${URL}/products/`)

    return response.data
  }
)

export const fetchGetProduct: any = createAsyncThunk(
  'users/fetchGetProduct',
  async (id) => {
    const response = await axios.get(`${URL}/products/details/${id}`)

    return response.data
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    clear(state) {
      state.productDetails = {}
    },
  },
  extraReducers: (builder) => {
    builder
      //Login
      .addCase(fetchGetProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGetProducts.fulfilled, (state, action) => {
        state.productsList = action.payload
        state.status = 'success'
      })

      //traer info del producto
      .addCase(fetchGetProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGetProduct.fulfilled, (state, action) => {
        state.productDetails = action.payload
        state.status = 'success'
      })
  },
})

export const {clear} = productSlice.actions
export default productSlice.reducer
