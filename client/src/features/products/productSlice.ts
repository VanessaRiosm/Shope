import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

interface ProductsState {
  productsList: any | null
  status: string
}

const initialState = {
  productsList: null,
  status: 'idle',
} as ProductsState

export const fetchGetProducts: any = createAsyncThunk(
  'users/fetchGetProducts',
  async () => {
    const response = await axios.get(`${URL}/products/`)

    return response.data
  }
)

export const productSlice: any = createSlice({
  name: 'products',
  initialState,

  reducers: {},
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
  },
})

export const {} = productSlice.actions
export default productSlice.reducer
